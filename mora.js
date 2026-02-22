/**
 * MORA - Montoro AI Assistant Widget
 * Interactive chat widget for the Montoro car dealership website.
 */

(function () {
  "use strict";

  /* ===== Knowledge Base ===== */
  const KNOWLEDGE = {
    greeting: [
      "Olá! 👋 Eu sou a <b>MORA</b>, assistente virtual da <b>Montoro</b>! Como posso te ajudar hoje?",
      "Oi! Bem-vindo à <b>Montoro</b>! Sou a <b>MORA</b>, sua assistente. Posso ajudar com informações sobre nossos veículos, financiamento e muito mais!",
    ],

    vehicles: {
      default:
        "Temos uma ampla seleção de veículos! Trabalhamos com sedãs, SUVs, hatches e pickups. Quer que eu te mostre algumas opções?",
      suv: 'Nossas SUVs são perfeitas para quem busca conforto e aventura! <div class="mora-car-suggestion"><h5>🚙 Montoro SUV Premium</h5><p>Motor 2.0 Turbo · Câmbio automático · 7 lugares</p><span class="mora-car-price">A partir de R$ 189.900</span></div>',
      sedan:
        'Nossos sedãs combinam elegância com economia. <div class="mora-car-suggestion"><h5>🚗 Montoro Sedan Executive</h5><p>Motor 1.5 Flex · Câmbio CVT · Couro premium</p><span class="mora-car-price">A partir de R$ 129.900</span></div>',
      hatch:
        'Hatches ágeis para o dia a dia! <div class="mora-car-suggestion"><h5>🏎️ Montoro Hatch Sport</h5><p>Motor 1.0 Turbo · 6 marchas · Multimídia 10"</p><span class="mora-car-price">A partir de R$ 89.900</span></div>',
      pickup:
        'Pickups robustas para trabalho e lazer! <div class="mora-car-suggestion"><h5>🛻 Montoro Pickup Force</h5><p>Motor 2.8 Diesel · Tração 4x4 · Caçamba reforçada</p><span class="mora-car-price">A partir de R$ 249.900</span></div>',
    },

    financing:
      "Na Montoro oferecemos condições especiais de financiamento! 💰<br><br>✅ Entrada facilitada<br>✅ Parcelas a partir de R$ 899/mês<br>✅ Aprovação em até 30 minutos<br>✅ Aceitamos seu usado como entrada<br><br>Quer simular um financiamento?",

    testDrive:
      "Adoraria agendar um test drive para você! 🚗💨<br><br>Nossos horários disponíveis:<br>📅 Segunda a Sexta: 9h - 18h<br>📅 Sábado: 9h - 14h<br><br>Qual veículo te interessa?",

    location:
      "📍 Estamos localizados na <b>Av. Principal, 1234 - Centro</b><br><br>🕐 Horário de funcionamento:<br>Seg-Sex: 8h às 18h<br>Sáb: 8h às 14h<br><br>📞 Telefone: (11) 9999-8888<br>📧 contato@montoro.com.br",

    tradeIn:
      "Aceitamos seu carro usado como parte do pagamento! 🔄<br><br>Fazemos avaliação gratuita e oferecemos os melhores valores do mercado. Traga seu veículo para avaliação!",

    warranty:
      "Todos os nossos veículos contam com garantia! 🛡️<br><br>✅ Garantia de fábrica de 3 a 5 anos<br>✅ Garantia estendida disponível<br>✅ Revisões incluídas no primeiro ano<br>✅ Assistência 24h",

    fallback: [
      "Hmm, não tenho certeza sobre isso. Posso te ajudar com informações sobre veículos, financiamento, test drive ou localização! 😊",
      "Desculpe, não entendi completamente. Que tal me perguntar sobre nossos carros, condições de pagamento ou agendar uma visita?",
      "Ainda estou aprendendo! 🤖 Posso te ajudar com: veículos disponíveis, financiamento, test drive, localização e troca de veículo.",
    ],
  };

  /* ===== Intent Detection ===== */
  function detectIntent(text) {
    var lower = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    var patterns = [
      { intent: "greeting",   words: ["oi", "ola", "hey", "bom dia", "boa tarde", "boa noite", "eai", "salve", "hello", "hi"] },
      { intent: "suv",        words: ["suv", "familia", "7 lugares", "grande"] },
      { intent: "sedan",      words: ["sedan", "seda", "executivo", "confort"] },
      { intent: "hatch",      words: ["hatch", "compacto", "pequeno", "cidade", "urbano", "sport"] },
      { intent: "pickup",     words: ["pickup", "pick-up", "caminhonete", "cacamba", "diesel", "4x4"] },
      { intent: "vehicles",   words: ["carro", "veiculo", "auto", "modelo", "estoque", "disponivel", "opcoes", "catalogo", "opcao"] },
      { intent: "financing",  words: ["financ", "parcela", "entrada", "pagamento", "preco", "valor", "custo", "quanto"] },
      { intent: "testDrive",  words: ["test drive", "testar", "experimentar", "agendar", "visita", "dirigir"] },
      { intent: "location",   words: ["endereco", "localiz", "onde", "telefone", "contato", "horario", "mapa"] },
      { intent: "tradeIn",    words: ["troca", "usado", "avaliacao", "trocar", "meu carro"] },
      { intent: "warranty",   words: ["garantia", "seguro", "revisao", "assistencia", "manutencao"] },
    ];

    for (var i = 0; i < patterns.length; i++) {
      for (var j = 0; j < patterns[i].words.length; j++) {
        if (lower.indexOf(patterns[i].words[j]) !== -1) {
          return patterns[i].intent;
        }
      }
    }
    return "fallback";
  }

  function getResponse(intent) {
    switch (intent) {
      case "greeting":
        return pick(KNOWLEDGE.greeting);
      case "suv":
        return KNOWLEDGE.vehicles.suv;
      case "sedan":
        return KNOWLEDGE.vehicles.sedan;
      case "hatch":
        return KNOWLEDGE.vehicles.hatch;
      case "pickup":
        return KNOWLEDGE.vehicles.pickup;
      case "vehicles":
        return KNOWLEDGE.vehicles.default;
      case "financing":
        return KNOWLEDGE.financing;
      case "testDrive":
        return KNOWLEDGE.testDrive;
      case "location":
        return KNOWLEDGE.location;
      case "tradeIn":
        return KNOWLEDGE.tradeIn;
      case "warranty":
        return KNOWLEDGE.warranty;
      default:
        return pick(KNOWLEDGE.fallback);
    }
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /* ===== DOM References ===== */
  var toggleBtn = document.getElementById("mora-toggle");
  var chatWindow = document.getElementById("mora-window");
  var messagesEl = document.getElementById("mora-messages");
  var inputEl = document.getElementById("mora-input");
  var sendBtn = document.getElementById("mora-send");
  var quickBtns = document.querySelectorAll(".mora-quick-btn");
  var badge = document.getElementById("mora-badge");

  /* ===== State ===== */
  var isOpen = false;
  var isFirstOpen = true;

  /* ===== Toggle Chat ===== */
  toggleBtn.addEventListener("click", function () {
    isOpen = !isOpen;
    chatWindow.classList.toggle("open", isOpen);
    toggleBtn.textContent = "";

    if (isOpen) {
      toggleBtn.innerHTML = "&#10005;"; /* × close icon */
      inputEl.focus();
      if (badge) badge.style.display = "none";

      if (isFirstOpen) {
        isFirstOpen = false;
        showTypingThenReply(pick(KNOWLEDGE.greeting));
      }
    } else {
      toggleBtn.innerHTML = "&#x1F916;"; /* 🤖 icon */
    }
  });

  /* ===== Send Message ===== */
  sendBtn.addEventListener("click", handleSend);
  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") handleSend();
  });

  function handleSend() {
    var text = inputEl.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    inputEl.value = "";

    var intent = detectIntent(text);
    var reply = getResponse(intent);
    showTypingThenReply(reply);
  }

  /* ===== Quick Action Buttons ===== */
  for (var i = 0; i < quickBtns.length; i++) {
    quickBtns[i].addEventListener("click", function () {
      var query = this.getAttribute("data-query");
      appendMessage(query, "user");

      var intent = detectIntent(query);
      var reply = getResponse(intent);
      showTypingThenReply(reply);
    });
  }

  /* ===== Message Helpers ===== */
  function appendMessage(content, sender) {
    var msgDiv = document.createElement("div");
    msgDiv.className = "mora-msg " + sender;

    var nameDiv = document.createElement("div");
    nameDiv.className = "mora-msg-name";
    nameDiv.textContent = sender === "bot" ? "MORA" : "Você";
    msgDiv.appendChild(nameDiv);

    var bodyDiv = document.createElement("div");
    if (sender === "bot") {
      bodyDiv.innerHTML = content;
    } else {
      bodyDiv.textContent = content;
    }
    msgDiv.appendChild(bodyDiv);

    messagesEl.appendChild(msgDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTypingThenReply(reply) {
    var typing = document.createElement("div");
    typing.className = "mora-typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    messagesEl.appendChild(typing);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    var delay = 800 + Math.random() * 700;
    setTimeout(function () {
      messagesEl.removeChild(typing);
      appendMessage(reply, "bot");
    }, delay);
  }
})();
