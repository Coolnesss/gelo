import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../css/Toast.css';

export default class Toast extends Component {
    render() {
      return (
        <div>
        {/* One container to rule them all! */}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
        />
        </div>
      );
    }
}
