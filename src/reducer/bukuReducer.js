import { harga } from './keuanganReducer';

const initialState = {
  banyakBuku: 0,
  totalHarga: 0,
}

export const bukuReducer = ( state = initialState, action) => {
  if(action.type === "TAMBAH_BUKU") {
    const newState = {
      banyakBuku: state.banyakBuku + 1,
      totalHarga: (state.banyakBuku + 1) * harga,
    }
    return newState
  }else if(action.type === "KURANGI_BUKU"){
    if(state.banyakBuku > 0){
      const newState = {
        banyakBuku: state.banyakBuku -1,
        totalHarga: (state.banyakBuku - 1) * harga,
      }
      return newState
    }
  }
  return state
}