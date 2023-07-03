import { Col, Row } from "react-bootstrap";
import TeamCard from "../../components/homeCards/teamCard";
import GeneralNoticeCard from "../../components/homeCards/generalNoticeCard";
import PendingApprovals from "../../components/homeCards/pendingApprovalsCard";
import AbsenteeismCard from "../../components/homeCards/absenteeismCard";
import HoursAbsenteeismCard from "../../components/homeCards/hoursAbsenteeismCard";

const Home = () => {
  const team = [
    {
      name: "Christine Spalding",
      image:
        "https://images.ctfassets.net/1wryd5vd9xez/4DxzhQY7WFsbtTkoYntq23/a4a04701649e92a929010a6a860b66bf/https___cdn-images-1.medium.com_max_2000_1_Y6l_FDhxOI1AhjL56dHh8g.jpeg",
    },
    {
      name: "Un MMG",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80",
    },
  ];

  const favorites = [
    {
      name: "Juan de lo Palote",
      image:
        "https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg",
    },
    {
      name: "Un cuero malo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICgZaLrjTma41IB4mBlt-ocIqAVoy4wpT4JwHbXgn&s",
    },
    {
      name: "Goku",
      image:
        "https://i.pinimg.com/originals/9d/6c/3e/9d6c3e7d32e7db9f31592faafe9a7d5b.png",
    },
  ];

  return (
    <Row className="g-3">
      <Col sm={12} md={6} lg={4}>
        <TeamCard title="Tu equipo" counter={2} infoRow={team} />
      </Col>
      <Col sm={12} md={6} lg={4}>
        <TeamCard title="Favoritos" counter={3} infoRow={favorites} />
      </Col>
      <Col sm={12} md={6} lg={4}>
        <GeneralNoticeCard title="Avisos Generales" />
      </Col>
      <Col sm={12} md={6} lg={4}>
        <AbsenteeismCard title="Ausentismos" />
      </Col>
      <Col sm={12} md={6} lg={4}>
        <HoursAbsenteeismCard title="Horas Ausentismos" />
      </Col>
      <Col sm={12} md={6} lg={4}>
        <PendingApprovals title="Aprovaciones pendientes" counter={6} />
      </Col>
    </Row>
  );
};

export default Home;
