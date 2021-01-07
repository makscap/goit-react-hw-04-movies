import React from 'react';
import { css } from '@emotion/react';
import FadeLoader from 'react-spinners/FadeLoader';

function Loader() {
  return (
    <FadeLoader

      css={css`
        margin-top: 80px;
      `}
      size={150}
      color={'orange'}
      loading={true}
    />
  );
}

export default Loader;