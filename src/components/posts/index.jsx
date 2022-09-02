import "./styles.css"
import { Link } from "react-router-dom"
import Autor from "../autor"

export default function Posts(){
    return(
        <div className="posts-container">
            <div className="post-container">
                <div>
                    <img className="post-img" src="https://www.naturallimp.com.br/smart/modulos/blog/imagens/grande/o-que-e-e-por-que-devemos-reciclar-o-lixo-eletronico_27-5.jpg" />
                </div>
                
                <div className="post-container-text">
                    <p> 02, setembro de 2022</p>
                    <h2> Equipamentos eletronicos para serem reciclados </h2>
                    <p>
                    Realize uma cotação de reciclagem de eletrônicos, 
                    encontre os melhores fornecedores, 
                    faça um orçamento hoje com aproximadamente 500 fornecedores gratuitamente.
                    <br/>
                    No Brasil, existem os postos coletores, mercados e revendedores de produtos eletrônicos que aceitam os 
                    Resíduos de Equipamentos Elétricos e Eletrônicos (reee). 
                    Apesar de não possuir uma alta tecnologia de reciclagem de eletrônicos, 
                    o país inicia essa caminhada para intervir na crescente produção de lixo eletrônico os problemas desse tipo de lixo.
                    <br/>
                    Após a coleta do e-lixo, o processo de reciclagem de eletrônicos inicia por meio de uma triagem, 
                    que pode ser feita manualmente ou por um computador - há a separação dos equipamentos em condições de uso 
                    (que podem ser doados) dos que não podem ser reutilizados.
                    <br/>
                    Logo, os aparelhos são desmontados, e a carcaça, a bateria, 
                    o vidro e as placas de circuito são separados, 
                    sendo dado um objetivo diferente para cada componente.
                    </p>
                    <Autor/>
                </div>
            
            </div>


            <div className="post-container">
                <div>
                    <img className="post-img" src="data:image/jpeg;base64,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" />
                </div>
                
                <div className="post-container-text">
                    <p> 02, setembro de 2022</p>
                    <h2> Equipamentos eletronicos para serem reciclados </h2>
                    <p>
                    Realize uma cotação de reciclagem de eletrônicos, 
                    encontre os melhores fornecedores, 
                    faça um orçamento hoje com aproximadamente 500 fornecedores gratuitamente.
                    <br/>
                    No Brasil, existem os postos coletores, mercados e revendedores de produtos eletrônicos que aceitam os 
                    Resíduos de Equipamentos Elétricos e Eletrônicos (reee). 
                    Apesar de não possuir uma alta tecnologia de reciclagem de eletrônicos, 
                    o país inicia essa caminhada para intervir na crescente produção de lixo eletrônico os problemas desse tipo de lixo.
                    <br/>
                    Após a coleta do e-lixo, o processo de reciclagem de eletrônicos inicia por meio de uma triagem, 
                    que pode ser feita manualmente ou por um computador - há a separação dos equipamentos em condições de uso 
                    (que podem ser doados) dos que não podem ser reutilizados.
                    <br/>
                    Logo, os aparelhos são desmontados, e a carcaça, a bateria, 
                    o vidro e as placas de circuito são separados, 
                    sendo dado um objetivo diferente para cada componente.
                    </p>
                    <Autor/>
                </div>
            
            </div>

            <div className="post-container">
                <div>
                    <img className="post-img" src="https://www.empresadereciclagem.com.br/imagens/reciclar.jpg" />
                </div>
                
                <div className="post-container-text">
                    <p> 02, setembro de 2022</p>
                    <h2> Equipamentos eletronicos para serem reciclados </h2>
                    <p>
                    Realize uma cotação de reciclagem de eletrônicos, 
                    encontre os melhores fornecedores, 
                    faça um orçamento hoje com aproximadamente 500 fornecedores gratuitamente.
                    <br/>
                    No Brasil, existem os postos coletores, mercados e revendedores de produtos eletrônicos que aceitam os 
                    Resíduos de Equipamentos Elétricos e Eletrônicos (reee). 
                    Apesar de não possuir uma alta tecnologia de reciclagem de eletrônicos, 
                    o país inicia essa caminhada para intervir na crescente produção de lixo eletrônico os problemas desse tipo de lixo.
                    <br/>
                    Após a coleta do e-lixo, o processo de reciclagem de eletrônicos inicia por meio de uma triagem, 
                    que pode ser feita manualmente ou por um computador - há a separação dos equipamentos em condições de uso 
                    (que podem ser doados) dos que não podem ser reutilizados.
                    <br/>
                    Logo, os aparelhos são desmontados, e a carcaça, a bateria, 
                    o vidro e as placas de circuito são separados, 
                    sendo dado um objetivo diferente para cada componente.
                    </p>
                    <Autor/>
                </div>
            
            </div>

            <div className="post-container">
                <div>
                    <img className="post-img" src="https://www.empresadereciclagem.com.br/imagens/reciclar.jpg" />
                </div>
                
                <div className="post-container-text">
                    <p> 02, setembro de 2022</p>
                    <h2> Equipamentos eletronicos para serem reciclados </h2>
                    <p>
                    Realize uma cotação de reciclagem de eletrônicos, 
                    encontre os melhores fornecedores, 
                    faça um orçamento hoje com aproximadamente 500 fornecedores gratuitamente.
                    <br/>
                    No Brasil, existem os postos coletores, mercados e revendedores de produtos eletrônicos que aceitam os 
                    Resíduos de Equipamentos Elétricos e Eletrônicos (reee). 
                    Apesar de não possuir uma alta tecnologia de reciclagem de eletrônicos, 
                    o país inicia essa caminhada para intervir na crescente produção de lixo eletrônico os problemas desse tipo de lixo.
                    <br/>
                    Após a coleta do e-lixo, o processo de reciclagem de eletrônicos inicia por meio de uma triagem, 
                    que pode ser feita manualmente ou por um computador - há a separação dos equipamentos em condições de uso 
                    (que podem ser doados) dos que não podem ser reutilizados.
                    <br/>
                    Logo, os aparelhos são desmontados, e a carcaça, a bateria, 
                    o vidro e as placas de circuito são separados, 
                    sendo dado um objetivo diferente para cada componente.
                    </p>
                    <Autor/>
                </div>
            
            </div>






        </div>
    )
}
