import AccordionItem from '../Components/AccordionFaq';

function Accordion() {
  const faqs = [
    { question: 'O que é a Netflix', answer: 'A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.' },
    { question: 'Quanto Custa a Netflix?', answer: 'Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras.' },
    { question: 'O que posso assistir na Netflix', answer: 'A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.' },
    { question: 'Onde cancelar?', answer: 'A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.' },
  ];

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default Accordion;
