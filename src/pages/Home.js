import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {store} from '../store';

import { tambahBuku, kurangiBuku } from '../Actions/jumlahBuku'

const ButtonTambah = styled.button`
  background-color: pink;
  padding: 10px 20px;
  margin: 15px;
  `

const ButtonKurang = styled(ButtonTambah)`
  background-color: red;
  color: white;
  `
class Home extends Component {
  constructor(){
    super();
    this.state = {
      buku: 0,
      harga: 0,
    }
  }

  componentDidMount(){
    this.setState({
      buku: store.getState().buku.banyakBuku,
      harga: store.getState().buku.totalHarga,
    })
    store.subscribe(() =>{
      console.log('ada perubahan nih');
      this.setState({
        buku: store.getState().buku.banyakBuku,
        harga: store.getState().buku.totalHarga
      })
    })
  }


    render(){
      console.log(this.props);
      console.log(store.getState())
      const buku = store.getState().buku.banyakBuku
      const harga = store.getState().buku.totalHarga
      return(
          <div>
              <h2>Mari Membaca</h2>
                  <span>Jumlah buku :</span> <span> {buku}</span> <br/>
                  <ButtonKurang onClick={this.props.kurangiBuku}> Kurang </ButtonKurang>
                  <ButtonTambah onClick={this.props.tambahBuku}> Tambah </ButtonTambah>
              <div>
                <h3>Harga Buku yang harus kamu bayar</h3>
                {harga}
              </div>
          </div>
          
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tambahBuku: () => dispatch(tambahBuku),
    kurangiBuku: () => dispatch(kurangiBuku),
  }
}

export default connect(null, mapDispatchToProps)(Home);