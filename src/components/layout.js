import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import { rhythm } from '../utils/typography';

import 'prismjs/themes/prism.css';
import '../../static/syntax-hl.css';
import 'katex/dist/katex.min.css';
import '../../static/global.css';

const IndexH3 = styled.h3`
  font-family: 'Rosario', sans-serif;
  margin: 0;

  @media only screen and (max-width: 480px) {
    text-align: right;
  }
`;

const HeaderDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(28)};
  padding-left: ${rhythm(1.15)};
  padding-right: ${rhythm(1.15)};
  padding-top: ${rhythm(1.15)};

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const ContentDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(30)};
  padding-bottom: ${rhythm(1.5)};
  padding-left: ${rhythm(1.15)};
  padding-right: ${rhythm(1.15)};
`;

const FooterDiv = styled.div`
  margin: ${rhythm(1)} auto;
  display: flex;

  flex-direction: row;
  justify-content: center;
  font-size: ${rhythm(1 / 2)};
`;

class Template extends React.Component {
  render() {
    const bgHsl = `hsl(50, 90%, 95%)`;
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    let header;
    const isRoot = location.pathname === rootPath;

    if (isRoot) {
      header = <IndexH3>XL Notes</IndexH3>;
    }
    return (
      <>
        <Helmet>
          <style>{`body { background-color: ${bgHsl}; }`}</style>
        </Helmet>
        <HeaderDiv>{header}</HeaderDiv>
        <ContentDiv>{children}</ContentDiv>
        <FooterDiv>
          <a href="https://xiaoru.li">Template by Xiaoru Li</a>
        </FooterDiv>
      </>
    );
  }
}

export default Template;
