function carregarMulheres() 
{
var biografias = {
    bio01: {nome: "Ada Lovelace", 
    imagem: "Imagens/Ada.jpg",
    descricao: "Matemática, escritora e condessa, Augusta Ada Byron King,  mais conhecida como Ada Lovelace, é a primeira programadora do mundo. Ela é responsável pelo primeiro algoritmo que foi usado por uma calculadora chamada de Máquina Analítica, o mais próximo do que seria um computador no começo do século XIX. "
},
    bio02: {nome: "Grace Hopper", 
    imagem: "Imagens/Grace.jpg",
    descricao: "Hopper inventou o primeiro compilador de processamento de dados em inglês, que lançou a base para o desenvolvimento de linguagens de programação independentes da máquina, como o Common Business Oriented Language, ou COBOL, que ela ajudou a desenvolver. Esta linguagem seria usada em todo o mundo. " 
    
},
    bio03: {nome: "Mary Kenneth Keller", 
    imagem:"Imagens/Mary.jpg",
    descricao: "Mary Kenneth Keller foi uma freira norte-americana, educadora e pioneira na ciência da computação. Em 7 de junho de 1965, junto de Irving Tang da Universidade Washington em St. Louis, se tornaram os primeiros doutores na área no país. Mary é considerada também a primeira mulher a receber um doutorado em ciência da computação." 
},
    bio04: {nome: "Carol Shaw", 
    imagem:"Imagens/Carol.jpg",
    descricao: "É a primeira mulher a trabalhar na indústria de games, sendo uma das principais pioneiras para a igualdade de gêneros nesse segmento. Primeiro, a desenvolvedora trabalhou em Polo (jogo de 1978 feito para uma campanha promocional da grife Ralph Lauren), e na sequência lançou comercialmente o primeiro jogo criado por uma mulher: era o 3-D Tic-Tac-Toe, de 1979, baseado no tradicional jogo da velha. Depois, entrou na Activision, onde programou River Raid em 1983 – seu game mais famoso."
},
    bio05: {nome: "Hedy Lamarr", 
    imagem:"Imagens/Hedy.jpg",
    descricao: "Hedy Lamarr é, na verdade, o nome artístico da cientista Hedwig Eva Marie Kiesler, responsável por diversas invenções e descobertas que revolucionaram a tecnologia de comunicação. Lamarr nasceu em Viena em 1914, possuía ascendência judia e desde pequena recebeu uma educação excepcional, pois para seus pais era algo essencial para a sobrevivência.Ela inventou, em parceria com George Anthiel, um aparelho de interferência em rádio para despistar os radares nazistas, isto porque Hady, ao realizar um dueto com George, tocando piano, percebeu que se o emissor e o receptor mudassem constantemente de frequência, os dois poderiam se comunicar sem medo de serem interceptados."
   
},
    bio06: {nome: "Shirley Ann Jackson", 
    imagem:"Imagens/Shirley_Ann_Jackson.jpg" ,
    descricao: "Shirley Ann Jackson (Washington, D.C., 5 de agosto de 1946) é uma física estadunidense, e décima-oitava presidente do Instituto Politécnico Rensselaer.[1] Obteve um Ph.D. em física nuclear no Instituto de Tecnologia de Massachusetts (MIT) em 1973, tornando-se a primeira mulher afro-estadunidense a obter um doutorado no MIT. Recebeu a Medalha Nacional de Ciências (ciências físicas) de 2014." 
    
},
    bio07: {nome: "Katherine Coleman Goble Johnson", 
    imagem:"Imagens/Katherine_Johnson.jpg" ,
    descricao: "Nascida em 26 de agosto de 1918 na cidade de White Sulphur Springs, nos Estados Unidos, Katherine Coleman Goble Johnson foi uma importante matemática. A cientista fez contribuições para a aeronáutica e exploração espacial. Katherine tinha talento com a matemática desde criança. Aos 14 anos, ela concluiu o ensino médio e, em 1939, se tornou a primeira negra a se graduar na Universidade da Virgínia Ocidental, em Morgantown.De início, os primeiros empregos de Katherine depois de formada foram como professora de matemática em uma escola pública para negros, já que não tinha oportunidades de alcançar cargos mais altos. Durante uma reunião de família, ela ficou sabendo que a Nasa estava com o processo seletivo aberto para mulheres, em especial as negras, para vagas de trabalho no Comitê Assessor Nacional de Aeronáutica. Ela se inscreveu em 1953 e logo foi aceita." 

},
    bio08: {nome: "Dorothy Johnson Vaughan", 
    imagem:"Imagens/Dorothy_Vaughan.jpg" ,
    descricao: "Dorothy Vaughan (20/09/1910 – 10/11/2008) foi uma das mais brilhantes mentes americanas na corrida espacial. Mesmo vivendo numa época onde o racismo era explícito nos Estados Unidos, ela fez a diferença e foi uma das pioneiras na introdução dos computadores para cálculos de rota nos projetos da NASA." 

},
    bio09: {nome: "Mary Winston Jackson", 
    imagem:"Imagens/Mary_Winston_Jackson.png" ,
    descricao: "Mary Winston Jackson foi funcionária da Nasa por 34 anos, começando como matemática de pesquisas e, eventualmente, se tornou a primeira mulher engenheira da agência. Depois, ela migrou para a parte administrativa e trabalhou no Gabinete por Oportunidades Iguais, liderando programas que influenciaram na contratação e promoção de mulheres matemáticas, engenheiras e cientistas. " 

}};


var content = document.getElementById("content");  /*fazer a inserção no Id content (<section>*/
for(var bio in biografias) /*percorrer a variavel bio na função biografias e trazer os nomes*/
{
    content.innerHTML +=
      '<div class="card">' +
      '<img src="' +
      biografias[bio].imagem +
      '"/>' +
      "<details>" +
      "<summary>" +
      biografias[bio].nome +
      "</summary>" +
      "<p>" +
      biografias[bio].descricao +
      "</p>" ;

    
}
}   

carregarMulheres(); /*chamando a função*/