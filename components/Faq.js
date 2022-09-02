// import components
import Accordion from './Accordion';

const Faq = ({ faqData }) => {
  // destructure faq data
  const { pretitle, title, accordions } = faqData;
  return (
    <section>
      <div>{pretitle}</div>
      <h2 className='h2'>{title}</h2>
      {accordions.map((accordion, idx) => {
        return <Accordion accordion={accordion} key={idx} />;
      })}
    </section>
  );
};

export default Faq;
