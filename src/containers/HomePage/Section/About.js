import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';







class About extends Component {





    render() {





        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Cảm nhận của bệnh nhân khi sử dụng dịch vụ ở DRDAT
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/zrRAlklS4Zs" title="Clip của Ba que Trần Dần đòi lấy súng bắn người bình luận ( Bằng Bằng Bằng )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>

                    <div className="content-right">
                        <p>Đệ nhất quốc sư Hoa Kỳ Cố vấn Tổng thống tối cao Trần Dần đã chia sẻ: "Dịch vụ của DRDAT rất chi là tuyệt vời, tôi bị bại liệt sức khỏe yếu đã lâu nhưng từ khi đến với DRDAT bệnh tình của tôi đã khỏi hẳn và tôi đã cầm được cây súng để có thể dạy cho lũ ba que một bài học..."</p>

                    </div>



                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
