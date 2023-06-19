function CriarFlor(nome, id, ocasiao='Casamento', cor, preco=0, src) {
    this.id = id;
    this.nome = nome;
    this.ocasiao = ocasiao;
    this.cor = cor;
    this.preco = preco.toFixed(2);
    this.src = src;
}

const ocasioesPossiveis = ['Dia das Mães', 'Dia dos Pais', 'Dia dos Namorados', 'Dia dos Amigos', 'Dia das Mulheres', 'Casamento', 'Aniversario', 'Festas']

function ranInt(min=0, max=7) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const flores = []


flores.push(new CriarFlor('Orquídea pink', flores.length, ocasioesPossiveis[ranInt()], 'rosa', 169.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-10-2_1.webp'))
flores.push(new CriarFlor('Orquídea branca', flores.length, ocasioesPossiveis[ranInt()], 'branco', 159.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-19-4.webp'))
flores.push(new CriarFlor('Orquídea rosa', flores.length, ocasioesPossiveis[ranInt()], 'rosa', 159.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-6-3.webp'))

flores.push(new CriarFlor('Arranjo de Rosa', flores.length, ocasioesPossiveis[ranInt()], 'rosa', 179.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-114-0.webp'))
flores.push(new CriarFlor('Rosa vermelha', flores.length, ocasioesPossiveis[ranInt()], 'vermelho', 169.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-105-4.webp'))
flores.push(new CriarFlor('Rosa amarela', flores.length, ocasioesPossiveis[ranInt()], 'amarelo', 159.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-107-1.webp'))
flores.push(new CriarFlor('Rosa branca', flores.length, ocasioesPossiveis[ranInt()], 'branco', 159.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-112-4.webp'))
flores.push(new CriarFlor('Rosa champagne', flores.length, ocasioesPossiveis[ranInt()], 'laranja', 179.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-113-1.webp'))

flores.push(new CriarFlor('Cravo branco', flores.length, ocasioesPossiveis[ranInt()], 'branco', 129.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-207-1.webp'))
flores.push(new CriarFlor('Cravo laranja', flores.length, ocasioesPossiveis[ranInt()], 'laranja', 149.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-296-2.webp'))
flores.push(new CriarFlor('Cravo roxo', flores.length, ocasioesPossiveis[ranInt()], 'roxo', 129.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-368-2.webp'))

flores.push(new CriarFlor('Margarida branca', flores.length, ocasioesPossiveis[ranInt()], 'branco', 169.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-44-1.webp'))
flores.push(new CriarFlor('Margarida amarela', flores.length, ocasioesPossiveis[ranInt()], 'amarelo', 169.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-11-0.webp'))
flores.push(new CriarFlor('Margarida roxo', flores.length, ocasioesPossiveis[ranInt()], 'roxo', 159.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-368-2.webp'))

flores.push(new CriarFlor('Violeta', flores.length, ocasioesPossiveis[ranInt()], 'roxo', 129.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-15-3.webp'))

flores.push(new CriarFlor('Anturio', flores.length, ocasioesPossiveis[ranInt()], 'vermelho', 139.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-14-4.webp'))

flores.push(new CriarFlor('Gérberas vermelhas', flores.length, ocasioesPossiveis[ranInt()], 'vermelho', 129.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-40-0.webp'))
flores.push(new CriarFlor('Gérberas amarelas', flores.length, ocasioesPossiveis[ranInt()], 'amarelo', 159.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-60-0.webp'))
flores.push(new CriarFlor('Gérberas brancas', flores.length, ocasioesPossiveis[ranInt()], 'branco', 159.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-237-2.webp'))
flores.push(new CriarFlor('Gérberas laranjas', flores.length, ocasioesPossiveis[ranInt()], 'laranja', 159.90, 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-296-2.webp'))

flores.push(new CriarFlor('Crisânteos', flores.length, ocasioesPossiveis[ranInt()], 'amarelo', 159.90, 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-250-0.webp'))

flores.push(new CriarFlor('Lírios rosas', flores.length, ocasioesPossiveis[ranInt()], 'rosa', 179.90, 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-33-1.webp'))
flores.push(new CriarFlor('Lírios da paz', flores.length, ocasioesPossiveis[ranInt()], 'verde', 189.90, 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-35-4.webp'))
flores.push(new CriarFlor('Lírios vermelhos', flores.length, ocasioesPossiveis[ranInt()], 'vermelho', 179.90, 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-325-2.webp'))

flores.push(new CriarFlor('Girassol', flores.length, ocasioesPossiveis[ranInt()], 'vermelho', 129.90, 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-38-3.webp'))

flores.push(new CriarFlor('Fortuna branca', flores.length, ocasioesPossiveis[ranInt()], 'branco', 129.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-5-2_1.webp'))
flores.push(new CriarFlor('Fortuna laranja', flores.length, ocasioesPossiveis[ranInt()], 'laranja', 129.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-9-0.webp'))

flores.push(new CriarFlor('Lisianthus', flores.length, ocasioesPossiveis[ranInt()], 'branco', 99.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-294-2.webp'))

flores.push(new CriarFlor('Astromélias amarelas', flores.length, ocasioesPossiveis[ranInt()], 'amarelo', 129.90, 'https://isabelaflores.com/media/catalog/product/a/l/alta-42-1.webp'))
flores.push(new CriarFlor('Astromélias roxas', flores.length, ocasioesPossiveis[ranInt()], 'roxo', 129.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-331-1_1.webp'))

flores.push(new CriarFlor('Begônia', flores.length, ocasioesPossiveis[ranInt()], 'rosa', 129.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-13-0.webp'))

flores.push(new CriarFlor('Ciclâme', flores.length, ocasioesPossiveis[ranInt()], 'rosa', 129.90, 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-23-2.webp'))

flores.push(new CriarFlor('Buquê colorido', flores.length, ocasioesPossiveis[ranInt()], 'branco laranja roxo', 199.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-58-3.webp'))
flores.push(new CriarFlor('Buquê branco', flores.length, ocasioesPossiveis[ranInt()], 'branco', 219.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-64-0.webp'))
flores.push(new CriarFlor('Buquê cores quentes', flores.length, ocasioesPossiveis[ranInt()], 'amarelo vermelho branco', 209.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-57-2.webp'))
flores.push(new CriarFlor('Buquê roxo e laranja', flores.length, ocasioesPossiveis[ranInt()], 'roxo laranja', 229.90, 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-328-0.webp'))


function recieveFlowers() {
    flores.forEach((flor, index) => {
        const divCard = document.createElement('div');
    
        divCard.classList.add('card-flower');

        if (index > 11) {
            divCard.classList.add('hide');
        }
    
        divCard.innerHTML = `<a href="/product.html?id=${flor.id}">
                                <img src="${flor.src}" alt="${flor.nome}">
                            </a>
                            <div class="card-text" data-ocasiao="${flor.ocasiao}">
                                <h1>${flor.nome}</h1>
                                <h2>R$ ${flor.preco.toString().replaceAll('.',',')}</h2>
                            </div>
                            <button class="card-btn" onClick="incrementarCarrinho(${flor.id})">
                                Adicionar ao Carrinho
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>`
    
        const productsContainer = document.querySelector('.products-container')
  
        productsContainer.appendChild(divCard)
    })
    countPages()
    rePage()
}



var paginaAtual = 0;
var qtdPaginas = 0;


function pageDown() {
    if(paginaAtual -1 < 0) {
        paginaAtual = qtdPaginas -1
    } else paginaAtual--
    verifyPageScaling()
}
function pageUp() {
    if(paginaAtual == qtdPaginas -1) {
        paginaAtual = 0
    } else paginaAtual++
    verifyPageScaling()
}
function verifyPageScaling() {
    if(floresRemoveHide.length > 0) {
        rePage(floresRemoveHide)
    }else rePage()
}
const qtdFloresPagina = 12;
var fimDaPagina =0;
var inicioDaPagina =0;
function rePage(floresCard = document.querySelectorAll('.card-flower')) {
    fimDaPagina = (paginaAtual + 1) * qtdFloresPagina;
    inicioDaPagina = fimDaPagina - qtdFloresPagina;
    
    const allFlowers = document.querySelectorAll('.card-flower')
    allFlowers.forEach((flor) => {
        flor.style.display = 'none'
    })
    for (let index = inicioDaPagina; index < fimDaPagina; index++) {
        if (floresCard.length -1 >= index) {
            floresCard[index].style.display = 'flex'
        }
    }
}

function countPages(floresCard = document.querySelectorAll('.card-flower')) {
    const qtdCards = floresCard.length
    qtdPaginas = Math.ceil(qtdCards / qtdFloresPagina);
}



const filtro = document.querySelector('.filtro');
const ocasioes = document.querySelector('#select');

filtro.addEventListener('input', doSearch)
ocasioes.addEventListener('input', doSearch )
var floresRemoveHide = []
function doSearch () {
    const textInput = filtro.value.toLowerCase().replaceAll(" ","")
    const selectInput = ocasioes.value
    const floresCard = document.querySelectorAll('.card-flower')
    // Mantém o filtro "desativado" e a paginação vai para o inicio
    if(textInput.length < 3 || selectInput == ""){
        countPages()
        rePage()
        paginaAtual = 0
        floresRemoveHide = []
    } else {
        floresCard.forEach((flor) => {
            flor.style.display = 'none'
        })
        const arrayElementos = Array.from(floresCard);
        floresRemoveHide = arrayElementos.filter((flor) => {
            const ocasiao = flor.querySelector('.card-text').getAttribute('data-ocasiao')
            const nome = flor.querySelector('h1').innerText.toLowerCase().replaceAll(" ","")
            const boolOcasioes = selectInput == "nenhum" ? false : true
            const boolTexto = textInput == "" ? false : true
            if (boolTexto && boolOcasioes) {return ocasiao.includes(selectInput) && nome.includes(textInput)}
            else if(boolTexto) {return nome.includes(textInput)}
            else if(boolOcasioes) {return ocasiao.includes(selectInput)}
            
        })
        if (floresRemoveHide.length == 0) {
            paginaAtual = 0
            countPages()
            rePage()
            return
        }
        paginaAtual = 0
        countPages(floresRemoveHide)
        rePage(floresRemoveHide)

    }   
    
}


function takeFlower() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const flor = flores.find((element) =>{
        return element.id == id
    })
    document.title = `Comprar - ${flor.nome}`;

    document.querySelector('.imagem_produto').src = flor.src
    document.querySelector('.details h1').innerHTML = flor.nome
    document.querySelector('.texto_produto h2').innerHTML = `R$ ${flor.preco.toString().replaceAll('.',',')}`
    document.querySelector('.parcela_produto').innerHTML = `R$ ${(flor.preco / 3).toFixed(2).toString().replaceAll('.',',')}`
    document.querySelector('.especie_produto').innerHTML = `Espécie :  ${flor.nome}`
    document.querySelector('.button_produto').addEventListener('click' ,function () {
        incrementarCarrinho(flor.id)
    })
    
}



function maisVendidas() {

    var floresVendidas = [...flores];
    for (let index = 0; index < 4; index++) {
        
    const randomNum = ranInt(0,floresVendidas.length - 1)
    const flor = floresVendidas[randomNum]    
        
    const divCard = document.createElement('div');

    divCard.classList.add('sale-card-flower');

    divCard.innerHTML = `<a href="/product.html?id=${flor.id}">
                            <img src="${flor.src}" alt="${flor.nome}">
                        </a>
                        <div class="card-text" data-ocasiao="${flor.ocasiao}">
                            <h1>${flor.nome}</h1>
                            <h2>R$ ${flor.preco.toString().replaceAll('.',',')}</h2>
                        </div>
                        <button class="card-btn" onClick="incrementarCarrinho(${flor.id})">
                            Adicionar ao Carrinho
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>`

    const saleContainer = document.querySelector('.sale-flowers')

    saleContainer.appendChild(divCard)
    floresVendidas.splice(randomNum, 1)
    } 
}


function incrementarCarrinho(id) {
    if (informacoes) {
        const circle = document.querySelector('.circle');
        const index = informacoes.cart.findIndex((item) => item.id == id)
        if (index == -1) informacoes.cart.push({id:id, count: 1});
        else informacoes.cart[index].count += 1;
        circle.innerHTML = informacoes.cart.length;
        localStorage.setItem('informacoes', JSON.stringify(informacoes));
        console.log(informacoes);
    } else {
        login()
    }
    cartItems()
    
}

function decrementarCarrinho(id) {
    if (informacoes) {
        const circle = document.querySelector('.circle');
        const index = informacoes.cart.findIndex((item) => item.id == id)
        if (informacoes.cart[index].count <= 1) {
            informacoes.cart.splice(index,1)
        }else {
            informacoes.cart[index].count -= 1;
        }
        circle.innerHTML = informacoes.cart.length;
        localStorage.setItem('informacoes', JSON.stringify(informacoes));
        console.log(informacoes);
    } 
    cartItems()
    
}

function cartItems() {
    const productsContainer = document.querySelector('.cart-products')
    if (informacoes && informacoes.cart.length > 0) {
        const products = document.querySelector('.cart-products .cart-product-flower')

        productsContainer.innerHTML = ""
        informacoes.cart.forEach((item) => {
            const flor = flores.find(x => x.id == item.id);
            const product = document.createElement('div');

            product.classList.add('cart-product-flower');
            // product.style.transform = 'scale(0)' 
            // product.style.transition = '.4s' 
            product.innerHTML = `<img src="${flor.src}" alt="${flor.nome}"/>
                                <div class="cart-product-details">
                                    <h2>${flor.nome}</h2>
                                    <span class="cart-product-flex">
                                        <h3>R$ ${flor.preco.replace('.',',')}</h3>
                                        <div class="counter">
                                            <button onclick="decrementarCarrinho(${flor.id})">
                                            <i class="fa-solid fa-minus"></i></button>
                                            <span class="counter-num">${item.count}</span>
                                            <button onclick="incrementarCarrinho(${flor.id})">
                                            <i class="fa-solid fa-plus"></i></button>
                                        </div>
                                    </span>
                                </div>`
            
            productsContainer.appendChild(product)
            // setInterval(function() {
            //   product.style.transform = 'scale(1)'
            // }, 100)
             
        })
    } else {
        productsContainer.innerHTML = "Ainda não há itens no carrinho..."
    }
    calcularValor()
}



function calcularValor() {
    var valorTotal = 0;
    if (informacoes) {
        informacoes.cart.forEach((item) => {
            const flor = flores.find(x => x.id == item.id);
            valorTotal += flor.preco * item.count; 
        })
    }
    console.log(valorTotal);
    
    document.querySelector('.preco').innerHTML = valorTotal.toFixed(2).replace('.',',')
}

const cartTab = document.querySelector('.cart-tab');
const cartButton = document.querySelector('.cart-tab h1 i');
const cartIcon = document.querySelector('.cart');

cartButton.addEventListener('click', toggleCart)
cartIcon.addEventListener('click', toggleCart)

function toggleCart() {
    if (informacoes) {
        cartTab.classList.toggle('cart-tab-show')
        // document.body.style.overflowY == "hidden" 
        //   ? document.body.style.overflowY = "auto" 
        //   : document.body.style.overflowY = "hidden"
      
    }else {
      login()
    }
}