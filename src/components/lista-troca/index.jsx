import "./styles.css"

export default function ListaTroca(){
    return (
        <section>
            <h1 className="section-title">Explore Suas Trocas</h1>
            <div className="list-container">
            
                <div className = "product">
                    <img className="img-list" src="https://d2r9epyceweg5n.cloudfront.net/stores/002/215/298/products/produto-tres-anverso1-cbbf9e55cdb3038cd216588990088787-1024-1024.jpg" />

                    <hr />
                    <div className="description">
                        <h4 className="text-green">Fornecido por </h4>
                        <h4> Rocket </h4>
                    
                        <h4 className="text-green">Troque</h4>
                        <h4>3 garrafas por 1 litro de azeite</h4>
                    </div>
                    
                    <button className="trade-button">Trocar</button>
                </div>

                <div className = "product" >
                    <img className="img-list" src="https://d2r9epyceweg5n.cloudfront.net/stores/002/215/298/products/produto-tres-anverso1-cbbf9e55cdb3038cd216588990088787-1024-1024.jpg" />
                    <h4 className="text-green">Fornecido por </h4>
                    <h4> Rocket </h4>
                
                    <h4 className="text-green">Troque</h4>
                    <h4>3 garrafas por 1 litro de azeite</h4>
                </div>

                <div className = "product">
                    <img className="img-list" src="https://d2r9epyceweg5n.cloudfront.net/stores/002/215/298/products/produto-tres-anverso1-cbbf9e55cdb3038cd216588990088787-1024-1024.jpg" />
                    <h4 className="text-green">Fornecido por </h4>
                    <h4> Rocket </h4>
                
                    <h4 className="text-green">Troque</h4>
                    <h4>3 garrafas por 1 litro de azeite</h4>
                </div>

                <div className = "product">
                    <img className="img-list" src="https://d2r9epyceweg5n.cloudfront.net/stores/002/215/298/products/produto-tres-anverso1-cbbf9e55cdb3038cd216588990088787-1024-1024.jpg" />
                    <h4 className="text-green">Fornecido por </h4>
                    <h4> Rocket </h4>
                
                    <h4 className="text-green">Troque</h4>
                    <h4>3 garrafas por 1 litro de azeite</h4>
                </div>
            </div>

        </section>

        
    )
}