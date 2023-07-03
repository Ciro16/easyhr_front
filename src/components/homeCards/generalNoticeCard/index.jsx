import PropTypes from "prop-types";
import "./generalNoticeCard.css";
import GeneralNoticeCardRow from "./generalNoticeRow";

const GeneralNoticeCard = ({ title }) => {
  return (
    <section className="generalNoticeCard border pt-2">
      <header className="cardHeader border-bottom px-2 d-flex justify-content-between align-items-center">
        <h6>{title}</h6>
        <span className="badge bg-secondary"></span>
      </header>

      <GeneralNoticeCardRow
        title="Wellness Program"
        description="Enjoy a week-long Wellness program at all our office..."
        image="https://square-vn.com/app/dscms/assets/images/person-2.jpg?v=1653932875"
      />

      <GeneralNoticeCardRow
        title="Otra vaina"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae at deleniti laborum, in est illo."
        image="https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg"
      />
    </section>
  );
};

GeneralNoticeCard.propTypes = {
  title: PropTypes.string,
};

export default GeneralNoticeCard;
