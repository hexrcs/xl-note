import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

class NotFoundPage extends React.Component {
  render() {
    const bgHsl = `hsl(50, 90%, 95%)`;

    return (
      <>
        <Helmet title={'Not Found'}>
          <style>{`body { background-color: ${bgHsl}; }`}</style>{' '}
        </Helmet>
        <div
          style={{ padding: `2rem`, margin: `3rem auto`, maxWidth: `40rem` }}
        >
          <h1>You seem lost...</h1>
          <p>
            Head back to the{'  '}
            <Link to="/">
              <b>home page</b>
            </Link>
            .
          </p>
        </div>
      </>
    );
  }
}

export default NotFoundPage;
