import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Loading from '../../layout/Loading';
import BookList from './BookList';
import Container from '../../layout/Container';
import { getCurrentUserBookLists } from '../../../actions/bookList';
import { setRem, setColor } from '../../layout/styles';

const Dashboard = ({
  getCurrentUserBookLists,
  auth: { user },
  bookList: { currentUserLists, loading },
}) => {
  useEffect(() => {
    getCurrentUserBookLists();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <DashboardWrapper>
      <Container>
        {currentUserLists && currentUserLists.length > 0 ? (
          <>
            <h2>Your Books</h2>
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
  a {
    color: ${setColor.secondaryDark};
  }
`;

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  bookList: PropTypes.object.isRequired,
  getCurrentUserBookLists: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bookList: state.bookList,
});

export default connect(mapStateToProps, {
  getCurrentUserBookLists,
})(Dashboard);
