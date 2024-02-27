import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

import favoritos from '../store/reducers/favoritos'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

const ProdutosComponent = () => {
  const { data: produtos } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const IdsDosFavoritos = favoritos.map((event) => event.id)
    return IdsDosFavoritos.includes(produto.id)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
