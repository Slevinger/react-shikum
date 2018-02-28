import React, { Component } from 'react';
import { ScrollView, Text, Picker } from 'react-native';
import axios from 'axios';

class DropDown extends Component {
  state = { data: [], value: null };

  componentWillMount() {
    const config = {
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' }
    };
    axios.get(this.props.url, config)
      .then((response) =>
        this.setState({ data: response.data.data })
      );
  }

  getValue(val) {
    if (val) {
     return val;
   }
   const ret =  this.state.data[0] ? this.state.data[0]._id.$oid : null;
   this.props.onValueChange(ret);
  }

  valueChanged(itemValue, index){
    this.props.onValueChange(itemValue);
     this.setState({ value: itemValue});
  }

   renderList() {
     let index = 0;
     return this.state.data.map((item) => {
       return (
         <Picker.Item label={item.name} value={item._id.$oid} key={index++} />
       );
     });
   }


  renderAlbums() {
    return (
    <Picker
     selectedValue={this.getValue(this.state.value)}
     onValueChange={(itemValue, itemIndex) => { this.valueChanged(itemValue, itemIndex); }}>
      { this.renderList() }
    </Picker>
  );

  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export { DropDown };
