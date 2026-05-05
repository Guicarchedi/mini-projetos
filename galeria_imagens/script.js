const botaoFiltro = document.getElementById('botaoFiltro');
const filtroPanel = document.querySelector('.filtro_imagem');
const botaoFiltrar = document.getElementById('botaoFiltrar');
const botaoLimpar = document.getElementById('botaoLimpar');
const inputDataInicio = document.getElementById('filtro-data');
const inputDataFim = document.getElementById('filtro-data-fim');
const formUpload = document.getElementById('formUpload');
const inputImagem = document.getElementById('imagem');
const inputDescricao = document.getElementById('descricao');
const inputDataImagem = document.getElementById('data-imagem');
const galeria = document.getElementById('galeria');
const mensagem = document.getElementById('mensagem');

let imagens = [];
const hoje = new Date().toISOString().slice(0, 10);
inputDataImagem.value = hoje;

function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

function renderGaleria(lista) {
    galeria.innerHTML = '';
    const itens = lista.length ? lista : imagens;

    if (!itens.length) {
        mensagem.textContent = 'Nenhuma imagem adicionada ainda. Use o formulário para incluir suas fotos com descrição e data.';
        mensagem.classList.remove('hide');
        return;
    }

    mensagem.classList.add('hide');

    itens.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';

        const foto = document.createElement('img');
        foto.src = item.src;
        foto.alt = item.descricao || 'Imagem da galeria';

        const conteudo = document.createElement('div');
        conteudo.className = 'card-content';

        const titulo = document.createElement('h3');
        titulo.textContent = item.nome;

        const descricao = document.createElement('p');
        descricao.textContent = item.descricao || 'Sem descrição.';

        const meta = document.createElement('div');
        meta.className = 'card-meta';
        meta.innerHTML = `<span>${formatarData(item.data)}</span><span>${item.tamanho}</span>`;

        conteudo.append(titulo, descricao, meta);
        card.append(foto, conteudo);
        galeria.appendChild(card);
    });
}

function adicionarImagens(arquivos, descricao, data) {
    const promessas = Array.from(arquivos)
        .filter(file => file.type.startsWith('image/'))
        .map(file => new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve({
                    nome: file.name,
                    src: reader.result,
                    descricao: descricao.trim(),
                    data: data || hoje,
                    tamanho: `${Math.round(file.size / 1024)} KB`
                });
            };
            reader.readAsDataURL(file);
        }));

    return Promise.all(promessas).then(novas => {
        imagens = imagens.concat(novas);
        renderGaleria(imagens);
    });
}

function filtrarGaleria() {
    const inicio = inputDataInicio.value;
    const fim = inputDataFim.value;

    const resultado = imagens.filter(item => {
        if (!inicio && !fim) return true;
        const dataItem = new Date(item.data).setHours(0, 0, 0, 0);
        if (inicio && dataItem < new Date(inicio).setHours(0, 0, 0, 0)) return false;
        if (fim && dataItem > new Date(fim).setHours(0, 0, 0, 0)) return false;
        return true;
    });

    renderGaleria(resultado);
}

botaoFiltro.addEventListener('click', () => {
    filtroPanel.classList.toggle('hide');
});

botaoFiltrar.addEventListener('click', filtrarGaleria);

botaoLimpar.addEventListener('click', () => {
    inputDataInicio.value = '';
    inputDataFim.value = '';
    renderGaleria(imagens);
});

formUpload.addEventListener('submit', event => {
    event.preventDefault();

    if (!inputImagem.files.length) {
        alert('Selecione pelo menos uma imagem para enviar.');
        return;
    }

    const descricao = inputDescricao.value;
    const dataImagem = inputDataImagem.value || hoje;

    adicionarImagens(inputImagem.files, descricao, dataImagem).then(() => {
        formUpload.reset();
        inputDataImagem.value = hoje;
    });
});

renderGaleria(imagens);
