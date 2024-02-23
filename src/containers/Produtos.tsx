import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import favoritos from '../store/reducers/favoritos'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((iten: { id: any }) => iten.id)

    return IdsDosFavoritos.includes(produtoId)
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
