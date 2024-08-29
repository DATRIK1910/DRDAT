import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';







class HomeFooter extends Component {





    render() {





        return (
            <div className="home-footer">
                <p>&copy; 2024 Phòng khám DRDAT.
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100052839199457">More info</a>
                </p>
            </div>



        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
