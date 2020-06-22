import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../../actions/profile';
import { selectBooks } from '../../../selectors/profile';
import Loading from '../../layout/Loading';
import BookList from './BookList';
import Header from './Header';
import Container from '../../layout/Container';

import styled from 'styled-components';
import { setRem, setFlex } from '../../layout/styles';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  console.log(profile);

  const readBooks = () =>
    profile.books.filter((book) => book.status === 'read');
  const toReadBooks = () =>
    profile.books.filter((book) => book.status === 'to-read');

  return loading && profile === null ? (
    <Loading />
  ) : (
    <DashboardWrapper>
      <Header user={user} profile={profile} />
      <Container>
        {profile && profile.books.length > 0 ? (
          <>
            <h3>Your Books</h3>
            <div className='books'>
              {readBooks().length > 0 && <BookList title='read' />}

              {toReadBooks().length > 0 && <BookList title='to-read' />}
            </div>
          </>
        ) : (
          <>
            <p>You haven't added any books yet</p>
            <Link to='/books'>Search books</Link>
          </>
        )}
      </Container>
    </DashboardWrapper>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  test: selectBooks(state),
});

const DashboardWrapper = styled.section`
  .books {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem()};
  }
`;

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
