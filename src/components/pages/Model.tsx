import {adidasArr} from './Adidas'
import {Navigate, useParams} from "react-router-dom";
import {PATH} from "../../App";


export const Model = () => {
    const params = useParams();
    console.log(params)
    const currentModel = adidasArr.find(el => el.id === Number(params.id));

    return (
        <div style={{textAlign: "center"}}>
            {
                currentModel
                    ? <div>
                        <h2>{currentModel.model}</h2>
                        <h4>{currentModel.collection}</h4>
                        <h3>{currentModel.price}</h3>
                        <img
                            src={currentModel.picture}
                            alt={currentModel.model}
                            style={{width: '600px', height: 'auto'}}
                        />
                    </div>
                    : <h2>Модель отсутствует</h2>
            }
        </div>
    );


    // ещё как вариант так обработать несуществующую модель, а именно заредиректить на страницу с ошибкой
    // if (!currentModel) {
    //     return <Navigate to={PATH.PAGE_ERROR_404} replace />;
    // }
    //
    // return (
    //     <div style={{ textAlign: "center" }}>
    //         <h2>{currentModel.model}</h2>
    //         <h4>{currentModel.collection}</h4>
    //         <h3>{currentModel.price}</h3>
    //         <img
    //             src={currentModel.picture}
    //             alt={currentModel.model}
    //             style={{ width: '600px', height: 'auto' }}
    //         />
    //     </div>
    // );
};
