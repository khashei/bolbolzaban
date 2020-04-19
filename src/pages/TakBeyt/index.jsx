import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputForm from './input-form';
import ResultContainer from './result/container';
import PropTypes from 'prop-types';
import { GenerateSW } from 'workbox-webpack-plugin';
import { generatePath } from 'react-router-dom';
import { generatePoemRequest } from '@app/api';

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    width: '100%',
    backgroundColor: palette.common.lightBackground,
    marginTop: '-50px',
    paddingTop: '50px',
  },
  mainContent: {
    position: 'relative',
  },
}));
// const onSubmit = () => {
//   const { firstMesra, secondMesra, hint } = BeytPreprocessor.process(
//     formState.firstMesra,
//     formState.secondMesra
//   );

//   const randomInputVisible = !firstMesra && !secondMesra;
//   setFormState({
//     ...formState,
//     randomInputVisible,
//     shouldSubmit: true,
//     isUserDefined: !randomInputVisible,
//   });
// };


const TakBeyt = props => {


  // const [result, setResult] = useState({
  //   style: 'free',
  //   firstMesra,
  //   secondMesra,
  // });


  // const { globalState, dispatch } = React.useContext(Context);
  // console.log('Global State', globalState);
  // const [value, setValue] = useState(0);
  // const updatedSubscriptionHeight = (value) => {
  //   this.setState({ footerHeight: value });
  // }

  const handleChange = (event, value) => {
    setValue(value);
  };

  const dispatchGeneratePoem = () => {
    const firstMesra = formState.firstMesra || '?';
    const secondMesra = formState.secondMesra || '?';
    const byUser = formState.isUserDefined;

    console.log(
      'DISPATCH WITH THIS',
      formState.style,
      `${firstMesra}-${secondMesra}`,
      byUser
    );

    generatePoemRequest({
      style: formState.style,
      mask: `${firstMesra}-${secondMesra}`,
      isUserDefined: byUser,
    });
  };

  const generateBeyt = (firstMesra, secondMesra, style) => {
    console.log(
      'Generating beyt with',
      firstMesra,
      secondMesra,
      style
    );
  }

  const classes = useStyles();
  return (
    <div className={classes.mainContent}>
      <InputForm
        isLoading={false}
        onSubmit={generateBeyt} />
      <ResultContainer />
    </div>
  );
}

TakBeyt.defaultProps = {};
TakBeyt.propTypes = {};

export default TakBeyt;
