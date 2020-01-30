import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Loading from '../layout/Loading';
import Book from './Book';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    loading && profile === null ? <Loading /> :
      <>
        <h1>Dashboard</h1>
        <p>Welcome {user && user.name}</p>

        {profile !== null ? (
          <div>
            <p>
              <i className="fas fa-home"></i>
              {' '}{profile.location}
            </p>

            <p>
              <i className="fas fa-user-circle"></i>
              {' '}{profile.bio}
            </p>

            {profile.books.length > 0 ? (
              <>
                <h3>Your Books</h3>

                {profile.books.filter(book => book.status === 'read').length > 0 && (
                  <>
                    <h4>Read</h4>
                    {profile.books.filter(book => book.status === 'read').map(book =>
                      <Book
                        book={book.book}
                      />)}
                  </>
                )}

                {profile.books.filter(book => book.status === 'to-read').length > 0 && (
                  <>
                    <h4>To Read</h4>
                    {profile.books.filter(book => book.status === 'to-read').map(book =>
                      <Book
                        book={book.book}
                      />)}
                  </>
                )}
              </>
            ) : (
                <>
                  <p>You haven't added any books yet</p>
                  <Link to="/books">Search books</Link>
                </>
              )}
          </div>
        ) : (
            <div>
              <p>You have not set up your profile.</p>
              <Link to="#!">Create profile</Link>
            </div>
          )}
      </>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
