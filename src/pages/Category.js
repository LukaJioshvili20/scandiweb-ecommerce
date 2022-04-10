import { Container } from "../components/styles/Container.styled"
import { ProductCard } from "../components/ui/Card"

function Category(){
  return(
      <div>
        <Container>
          <h1>Category name</h1>
          <div>
            <ProductCard/>
          </div>
        </Container>
      </div>
  )
}

export default Category;
