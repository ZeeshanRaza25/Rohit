import './App.css';
import 'antd/dist/antd.css';
import { Col, Row, Input, Button } from 'antd';
import pic from './assets/pic.png';
import logo from './assets/logo.png';
import { ArrowLeftOutlined, PushpinOutlined, WechatOutlined } from '@ant-design/icons';
import { style } from './style'

function App() {
  const {
    firstCol,
    veriCode,
    otp,
    otpInput,
    submitButton,
    divStyle,
    arrowLeft,
    spanStyle,
    imgCol,
    chatColStyle,
    weChatCol,
    weChatIcon,
    commentButtons
  } = style
  return (
    <Row>
      <Col span={1}></Col>
      <Col span={6} style={firstCol}>
        <img src={logo} width="100px" alt="" srcset="" />
        <h3 style={veriCode}>Verification Code</h3>
        <p>Please type the verification code sent to your email or mobile number <b>+917899878778</b>
        </p>
        <span style={otp}>Enter OTP</span>
        <Input placeholder="Enter OTP" style={otpInput} />
        <Button type="primary"
          style={submitButton}>
          Submit
        </Button>
        <div style={divStyle}>
          <ArrowLeftOutlined style={arrowLeft} />
          <span style={spanStyle}>Change Details</span>
        </div>
      </Col>
      <Col span={10} style={imgCol}>
        <img src={pic} width="100%" alt="" srcset="" />
      </Col>
      <Col span={5} style={chatColStyle}>
        <Input placeholder="Make a comment" suffix={<PushpinOutlined />} />
        <Row justify="end" style={commentButtons}>
          <Col span={8}>
            <Button>Cancel</Button>
          </Col>
          <Col span={4}>
            <Button>Submit</Button>
          </Col>
          <Col span={2}></Col>
        </Row>
        <hr />
        <Row justify="center" align="middle" >
          <Col span={18} style={weChatCol}>
            <WechatOutlined style={weChatIcon} />
            <h3>Got something to say?</h3>
            <h5>
              Comment to start a discussion, make a note, or annotate the artboard.
            </h5>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default App;
