import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../../actions/profile';
import { getCurrentUserBookLists } from '../../../actions/bookList';
import Loading from '../../layout/Loading';
import BookList from './BookList';
import Header from './Header';
import Container from '../../layout/Container';

import styled from 'styled-components';
import { setRem, setFlex } from '../../layout/styles';

const Dashboard = ({
  getCurrentProfile,
  getCurrentUserBookLists,
  auth: { user },
  profile: { profile },
  bookList: { currentUserLists, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
    getCurrentUserBookLists();
  }, [getCurrentProfile]);

  return loading ? (
    <Loading />
  ) : (
    <DashboardWrapper>
      {/* <Header user={user} profile={profile} /> */}
      <Container>
        {currentUserLists && currentUserLists.length > 0 ? (
          <>
            <h3>Your Books</h3>
            {currentUserLists.map((list) => (
              <BookList key={list._id} list={list} />
            ))}
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

const DashboardWrapper = styled.section`
  .books {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem()};
  }
`;

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  bookList: state.bookList,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  getCurrentUserBookLists,
})(Dashboard);
