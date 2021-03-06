import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import Divider from '@material-ui/core/Divider';
//import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';
import { Typography } from 'antd';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Reserve3 from '../reserveList/reserveListComponent'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //marginLeft:'42px',
    //marginTop:20,
    //height:'50px',
    width:'94vw'
  },
  card:{
      width:600,
      height:300,
      marginTop:30,
      marginLeft:290,
  },
  table:{
      border:1,
      borderColor:'red',
      BorderStyle:'solid',
      rules:'all',
      marginLeft:55,
      marginTop:35,
      width:490,
      height:230,
      backgroundColor:'#f0f0f0',
  },
  divider1:{
      marginTop:35,
      marginLeft:50,
      marginRight:50,
      height:1.5,
  },
  text1:{
      //marginLeft:150,
      //marginTop:7,
      fontSize:18,
      fontWeight: "bold",
      color:'#66009D',
      fontFamily: "Microsoft JhengHei",
      letterSpacing:4,
  },
  divider2:{
      marginTop:7,
      marginLeft:50,
      marginRight:50,
      height:1.5,
  },
  name:{
      //marginTop:10,
  },
  texttitle:{
    fontSize:16,
    fontWeight: "bold",
    color:'#FFBF5F',
    fontFamily: "Microsoft JhengHei",
    letterSpacing:4,
    marginLeft:50,
  },
  detail:{
    marginLeft:25,
    fontSize:16,
    fontWeight: "bold",
    color:'#969696',
    fontFamily: "Microsoft JhengHei",
    letterSpacing:4,
  },
  formControl:{
      width:250,
      height:28,
      marginLeft:10,
  },
});

class NativeSelects extends React.Component {
  state = {
    age: '',
    name: '王映心',
    region:'古亭校區',
    date:'03/25',
    time:'12:00',
    labelWidth: 0,
  };

//   componentDidMount() {
//     this.setState({
//       labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
//     });
//   }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Card className={classes.card}>
      <table className={classes.table}>
          <tr align="center"><td colspan="2"><Typography class={classes.text1}>補課資料</Typography></td></tr>

          <tr><td align="left"><a className={classes.texttitle}>姓名</a>
          <a className={classes.detail}>{this.state.name}</a></td>
          <td align="left"><a className={classes.texttitle}>校區</a>
          <a className={classes.detail}>{this.state.region}</a></td></tr>

          <tr><td align="left"><a className={classes.texttitle}>日期</a>
          <a className={classes.detail}>{this.state.date}</a></td>
          <td align="left"><a className={classes.texttitle}>時間</a>
          <a className={classes.detail}>{this.state.time}</a></td></tr>

          <tr align=""><td colspan="2"><Typography class={classes.texttitle}>選擇課程
          <FormControl variant="outlined" className={classes.formControl}>
        
          <InputLabel 
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-native-simple">
          </InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange('age')}
            input={
              <OutlinedInput
                name="Age"
                labelWidth={this.state.labelWidth}
                id="outlined-age-native-simple"
              />
            }
          >
            <option value="" />
            <option value="1" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>國文B班 10/30</option>
            <option value="2" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>數學A班 02/14</option>
            <option value="3" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>理化C班 03/03</option>
          </Select>
        </FormControl> 
          </Typography></td></tr>

          <tr align="center"><td colspan="2"> 
          {/* <NavLink style={{textDecoration:'none'}} activeClassName='active' to='/reserve3'> */}
            <Button onClick={this.handleClickOpen}
            variant="contained"
            style={{fontFamily: "Microsoft JhengHei",etterSpacing:4,fontSize:13,fontWeight: "bold",height:30,
            backgroundColor:'#FFBF5F',color:'white'}}>
             預約</Button>
            {/* </NavLink> */}
            </td></tr>
      </table>
      </Card>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <a style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",
              marginLeft:50,marginRight:50}}>預約成功</a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={this.handleClose} color="primary" onClick={this.handleClose}>
            <a style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold"}}>取消</a>
            </Button> */}
            <NavLink style={{textDecoration:'none'}} activeClassName='active' to='/reserve3'>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              <a style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold"}}>確定</a>
            </Button></NavLink>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
