import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
// import styles from './IndexPage.css';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import QueueAnim from 'rc-queue-anim';
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount(){
      document.title = 'About Page!'
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
        <QueueAnim>
            <div key="0" style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={value => this.handleChange(value)} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
                <QueueAnim>
                    <div key="a">依次进场</div>
                    <div key="b">依次进场</div>
                    <div key="c">依次进场</div>
                    <div key="d">依次进场</div>
                    <Link to='/index' key="e">Home Page</Link>
                </QueueAnim>
            </div>
        </QueueAnim>
    );
  }
}

About.propTypes = {
};

export default connect()(About);
