import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";
import DarkUnica from "highcharts/themes/dark-unica";

DarkUnica(Highcharts);

const HighchartsComponent = props => {
  const { options, id } = props;
  // console.log(options);
  return (
    <div id={id}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

HighchartsComponent.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
};

HighchartsComponent.defaultProps = {};
export default HighchartsComponent;
