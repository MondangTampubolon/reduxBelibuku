import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const About = props => {
  const buku = props.buku
  return (
    <div>
      <h2> About page</h2>
        <span> Jumlah Buku :</span> <span><strong>{buku}</strong></span><br/>
        <Link to='/'>Back</Link>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return{
    buku: state.buku.banyakBuku
  }
}

export default connect(mapStateToProps, null)(About);