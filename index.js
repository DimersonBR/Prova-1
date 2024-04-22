const { createApp } = Vue;

createApp({
  data() {
    return {
      heroi: {
        vida: 100,
        ataque: 20,
        defesa: 10,
        cura: 25,
      },
      vilao: {
        vida: 100,
        ataque: 20,
        defesa: 10,
        cura: 25,
      },
      turno: "heroi",
      mensagens: [],
    };
  },
  methods: {
    atacar(personagem) {
      const dano = Math.floor(Math.random() * personagem.ataque) + 1;
      const defesa = Math.floor(Math.random() * this.getPersonagem(personagem.oponente).defesa) + 1;
      const danoFinal = dano - defesa;
      this.getPersonagem(personagem).vida -= danoFinal;
      this.adicionarMensagem(`${personagem.nome} causou ${danoFinal} de dano!`);
      this.verificarFimJogo();
      this.trocarTurno();
    },
    defender(personagem) {
      const cura = Math.floor(Math.random() * personagem.cura) + 1;
      this.getPersonagem(personagem).vida += cura;
      this.adicionarMensagem(`${personagem.nome} se curou ${cura} de vida!`);
      this.trocarTurno();
    },
    usarPocao(personagem) {
      const cura = 20;
      this.getPersonagem(personagem).vida += cura;
      this.adicionarMensagem(`${personagem.nome} usou uma poção e se curou ${cura} de vida!`);
      this.trocarTurno();
    },
    correr(personagem) {
      const chanceFuga = Math.random() < 0.5;
      if (chanceFuga) {
        this.adicionarMensagem(`${personagem.nome} fugiu!`);
        this.terminarJogo(personagem.oponente);
      } else {
        this.adicionarMensagem(`${personagem.nome} falhou na fuga!`);
        this.trocarTurno();
      }
    },
    acaoVilao() {
      const acoes = ["atacar", "defender", "usarPocao", "correr"];
      const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
      this[acaoAleatoria]("vilao");
    },
    verificarFimJogo() {
      if (this.heroi.vida <= 0) {
        this.terminarJogo("vilao");
      } else if (this.vilao.vida <= 0) {
        this.terminarJogo("heroi");
      } else if (this.heroi.vida <= 20 && this.vilao.vida <= 20) {
        this.terminarJogo("empate");
      }
    },
    trocarTurno() {
      this.turno = this.turno === "heroi" ? "vilao" : "heroi";
    },
    getPersonagem(nome) {
      return this[nome] === this.heroi ? "heroi" : "vilao";
    },
    adicionarMensagem(mensagem) {
      this.mensagens.push(mensagem);
    },
    terminarJogo(vencedor) {
      let mensagem;
      if (vencedor === "heroi") {
        mensagem = "Vitória do Herói!";
      } else if (vencedor === "vilao") {
        mensagem = "Vitória do Vilão!";
      } else {
        mensagem = "Empate!";
      }
      alert(mensagem);
      
    },
  },
}).mount("#app");

/*
createApp({
    data() {
        return {
            heroi: { vida: 100 },
            vilao: { vida: 100 }
        }
    },
    methods: {
        atacar(isHeroi) {
            const dano = Math.floor(Math.random() * 20) + 1; // Dano entre 1 e 20
            if (isHeroi) {
                console.log("Herói atacou");
                this.vilao.vida -= dano; // Diminui a vida do vilão
                this.acaoVilao();
            } else {
                console.log("Vilão atacou");
                this.heroi.vida -= dano; // Diminui a vida do herói
            }
            this.verificarFimJogo();
        },
        defender(isHeroi) {
            const defesa = Math.floor(Math.random() * 10) + 1; // Defesa entre 1 e 10
            if (isHeroi) {
                console.log("Herói defendeu");
                this.heroi.vida += defesa; // Aumenta a vida do herói
            } else {
                console.log("Vilão defendeu");
                this.vilao.vida += defesa; // Aumenta a vida do vilão
            }
        },
        usarPocao(isHeroi) {
            const cura = 20; // Valor fixo de cura
            if (isHeroi) {
                console.log("Herói usou poção");
                this.heroi.vida += cura;
            } else {
                console.log("Vilão usou poção");
                this.vilao.vida += cura;
            }
        },
        correr(isHeroi) {
            const chanceFuga = Math.random() < 0.5; // 50% de chance de fuga
            if (isHeroi && chanceFuga) {
                console.log("Herói fugiu");
                // Implementar lógica de fuga
            } else if (!isHeroi && chanceFuga) {
                console.log("Vilão fugiu");
                // Implementar lógica de fuga
            } else {
                console.log("Fuga falhou");
                // Continuar o combate
            }
        },
        acaoVilao() {
            const acoes = ['atacar', 'defender', 'usarPocao', 'correr'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            thisacaoAleatoria;
        },
        verificarFimJogo() {
            if (this.heroi.vida <= 0) {
                console.log("Herói perdeu!");
                // Terminar o jogo
            } else if (this.vilao.vida <= 0) {
                console.log("Vilão perdeu!");
                // Terminar o jogo
            }
        }
    }
}).mount("#app");

*/

/*
createApp({
    data() {
        return {
            heroi: {vida: 100},
            vilao: {vida: 100}
        }
    },
    methods: {
        atacar(isHeroi) {
            if (isHeroi) {
                console.log("Herói atacou")
                this.acaoVilao();
            } else {
                console.log("Vilão atacou")
                this.acaoVilao();
            }
        },
        defender() {

        },
        usarPocao() {

        },
        correr() {

        },
        acaoVilao() {
            const acoes = ['atacar', 'defender', 'usarPocao', 'correr'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this[acaoAleatoria](false);
        }
    }
}).mount("#app")
*/