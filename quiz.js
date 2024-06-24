const questions = [
    {
        question: "Qual dessas afirmações NÃO representa o que é poesia?",
        options: [
            "consiste na redação escrita tipificada pela brevidade",
            "palavras vivas",
            "criatividade verbal",
            "alto grau de estrutura",
            "palavras desconexas"
        ],
        answer: "palavras desconexas"
    },
    {
        question: "A poesia na Bíblia está restrita aos livros chamados poéticos?",
        options: [
            "Não",
            "Sim",
        ],
        answer: "Não"
    },
    {
        question: "O monge inglês (**********) (673-735), fez um estudo literário da Bíblia, enumerou e explicou os tropos e as figuras. qual o nome do monge?",
        options: [
            "Beda",
            "Sela",
            "Quevra",
            "Agostinho",
        ],
        answer: "Beda"
    },
    {
        question: "Qual dessas afirmações NÃO representa o que são tropos?",
        options: [
            "uma figura de linguagem ou da retórica onde ocorre uma mudança de significado, seja interna (em nível do pensamento) ou externa (em nível da palavra).",
            "uma figura de linguagem utilizada para mudar o significado original de uma palavra ou ideia.",
            "Alusões, eufemismos, metáforas e paradoxos são exemplos de tropos literários.",
            "Estilo de Escrita Hebraica que impossibilita o uso de vogais no idioma",
        ],
        answer: "Estilo de Escrita Hebraica que impossibilita o uso de vogais no idioma"
    },
    {
        question: "Na modernidade foi o bispo anglicano (******) (1710-1787) quem inaugurou o estudo sistemático da poesia bíblica. Qual o nome do bispo?",
        options: [
            "Robert LOWTH",
            "Robert GROUTH",
            "Robert STUDENTS",
            "Robert MC.KLAUND",
        ],
        answer: "Robert LOWTH"
    },
    {
        question: "Quais são as formas de paralelismo identificadas por Robert Lowth na poesia bíblica?",
        options: [
            "Apenas sinonímico, antitético, sintético",
            "sinonímico, antitético, estóico",
            "sinonímico, lucido, sintético",
            "sinonímico, antitético, sintético, apoteótico e emblemático"
        ],
        answer: "Apenas sinonímico, antitético, sintético"
    },
    {
        question: "Modernamente foi identificado mais dois tipos de paralelismo na poesia biblica além dos que Robert Lowth havia identificado, quais foram?",
        options: [
            "antitético, sintético",
            "sinonímico, antitético",
            "sinonímico, lucido",
            "apoteótico e emblemático"
        ],
        answer: "apoteótico e emblemático"
    },
    {
        question: "Qual desses genêros poéticos se refere a charadas e enigmas?",
        options: [
            "Ḥîdâ",
            "Šîr",
            "māšāl"
        ],
        answer: "Ḥîdâ"
    },
    {
        question: "Qual desses genêros poéticos se refere a parabolas e proverbios?",
        options: [
            "Ḥîdâ",
            "Šîr",
            "māšāl"
        ],
        answer: "māšāl"
    },
    {
        question: "Qual desses genêros poéticos se refere a lamentações?",
        options: [
            "Mehî",
            "Šîr",
            "Ne`um Yhwh"
        ],
        answer: "Mehî"
    },
    {
        question: "O que são Epinicios?",
        options: [
            "Canticos de Vitoria",
            "Canticos de Lamento",
            "Choro coletivo"
        ],
        answer: "Canticos de Vitoria"
    },
    
    {
        question: "Ler em hebraico se diz “*******”, que significa “chamar, clamar”. como é ler em hebraico?",
        options: [
            "qārā",
            "qārun",
            "qārin",
            "qār misthair"
        ],
        answer: "qārā"
    },
    {
        question: "Qual dessas afirmações NÃO se referem ao que significa uma satira?",
        options: [
            "técnica literária ou artística que ridiculariza um determinado tema",
            "castigar os costumes pelo riso",
            "possui o objectivo de provocar ou evitar uma mudança.",
            "técnica literária ou artística que apoia uma determinada ação"
        ],
        answer: "técnica literária ou artística que defende um determinado tema"
    },
    {
        question: "No Salmo 119, a cada 8 versos aparece uma letra hebraica, o que essas letras representam?",
        options: [
            "O Alfabeto hebraico",
            "Os meses no calendario Hebraico",
            "O nome do autor de cada bloco",
            "Nenhuma das alternativas"
        ],
        answer: "O Alfabeto hebraico"
    },
    {
        question: "“Ao Senhor pertence a terra e a sua plenitude,o mundo e os que nele habitam”(Sl 24.1)  este verso demonstra qual tipo de paralelismo?",
        options: [
            "sinonímico Idêntico",
            "antitético",
            "sinonímico semelhante",
            "sintético ou construtivo"
        ],
        answer: "sinonímico Idêntico"
    },
    {
        question: "“Pois o Senhor conhece o caminho dos justos, mas o caminho dos ímpios perecerá” (Sl 1.6). este verso demonstra qual tipo de paralelismo?",
        options: [
            "sinonímico Idêntico",
            "antitético",
            "sinonímico semelhante",
            "sintético ou construtivo"
        ],
        answer: "antitético"
    },
    {
        question: "“Um dia discursa a outro dia, e uma noite revela conhecimento a outra noite” (Sl 19.2). este verso demonstra qual tipo de paralelismo?",
        options: [
            "sinonímico Idêntico",
            "antitético",
            "sinonímico semelhante",
            "sintético ou construtivo"
        ],
        answer: "sinonímico semelhante"
    },
    {
        question: "“Melhor é um prato de legumes onde há amor do que um boi inteiro acompanhado de ódio” (Pv 15.17). este verso demonstra qual tipo de paralelismo?",
        options: [
            "sinonímico Idêntico",
            "antitético",
            "sinonímico semelhante",
            "sintético ou construtivo"
        ],
        answer: "sintético ou construtivo"
    },
    {
        question: "“Deem ao Senhor, ó filhos de Deus, deem ao Senhor glória e força” (Sl 29.1). este verso demonstra qual tipo de paralelismo?",
        options: [
            "Apoteótico",
            "antitético",
            "emblematico",
            "sintético ou construtivo"
        ],
        answer: "Apoteótico"
    },
    {
        question: "“Como água fria para quem tem sede, assim é a boa notícia que vem de um país distante” (Pv 25.25). este verso demonstra qual tipo de paralelismo?",
        options: [
            "Apoteótico",
            "antitético",
            "emblematico",
            "sintético ou construtivo"
        ],
        answer: "emblematico"
    },
    {
        question: "Visto que eu clamei, e eles não me ouviram, eles também clamaram, e eu não os ouvi, diz o SENHOR dos Exércitos (Zc 7.13). este verso demonstra qual tipo de paralelismo sinonímico?",
        options: [
            "sinonímico Idêntico",
            "sinonímico Quiasmatico",
            "sinonímico Semelhante"
        ],
        answer: "sinonímico Quiasmatico"
    },
    {
        question: "O que significa literatura Sapiencial?",
        options: [
            "literatura poética",
            "literatura de sabedoria",
            "literatura sobre sapos"
        ],
        answer: "literatura de sabedoria"
    },

    {
        question: "Em 2Samuel 20.18 vemos que uma cidade de Bete-Maaca era famosa por sua sabedoria e a ela recorriam para revolver problemas ouvindo os conselhos dos sábios ali. qual o nome dessa cidade?",
        options: [
            "Jericó",
            "Cidade de Abel",
            "Bete-Haven"
        ],
        answer: "Cidade de Abel"
    },
    {
        question: "O que era ser sabio (hākām) no AT?",
        options: [
            "alguém que sabia descobrir a resposta certa nos momentos críticos",
            "pessoas idosas",
            "Pessoa que adquiriu um vasto conhecimento através de estudo"
        ],
        answer: "alguém que sabia descobrir a resposta certa nos momentos críticos"
    },
    
];

let currentQuestion = 0;
let score = 0;
let chances = 3;
let countdown;

function startTimer(seconds) {
    let timer = seconds;
    countdown = setInterval(function() {
        timer--;
        document.getElementById("countdown").innerText = timer + "s";
        if (timer === 0) {
            clearInterval(countdown);
            displayNextQuestion();
        }
    }, 1000);
}

function displayQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questions[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = function() {
            checkAnswer(option);
        };
        optionsContainer.appendChild(button);
    });
    startTimer(120); // Defina a duração do temporizador em segundos
}

function displayNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedOption) {
    clearInterval(countdown);
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
        displayNextQuestion();
    } else {
        chances--;
        if (chances === 0) {
            endQuiz();
        } else {
            alert("Resposta incorreta! Você tem mais " + chances + " tentativas.");
            displayNextQuestion();
        }
    }
}

function endQuiz() {
    alert("Quiz concluído! Sua pontuação é: " + score);
    // Você pode adicionar mais ações aqui, como reiniciar o quiz.
}

displayQuestion();
