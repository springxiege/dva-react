import React, {Component} from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
class IndexPage extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        document.title = 'Welcome to Dva!'
    }
    render(){
        return (
            <div className={styles.normal}>
              <h1 className={styles.title}>Yay! Welcome to dva!</h1>
              <div className={styles.welcome} />
              <Link to='/About'>About</Link>
              <ul className={styles.list}>
                <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
                <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
              </ul>
            </div>
        )
    }
}
IndexPage.propTypes = {
};

export default connect()(IndexPage);
