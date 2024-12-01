import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Container, InputProduct, Label, ButtonStyle, LabelUpload, ContainerInput } from "./styles.js";
import { api } from "../../../services/api.js";
import { useForm, Controller } from "react-hook-form";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "../../../components/index.js";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function EditProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state?.product || {};

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.number().required('Digite o preço do produto'),
        category: Yup.object().required('Escolha uma categoria'),
        offer: Yup.bool(),
        file: Yup.mixed()
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        console.log("ID do produto:", product.id);
        if (!product.id) {
            console.error("ID do produto não encontrado!");
            return;
        }

        const productDataFormData = new FormData();
        productDataFormData.append('name', data.name);
        productDataFormData.append('price', data.price);
        productDataFormData.append('category_id', data.category.id);
        if (data.file[0]) {
            productDataFormData.append('file', data.file[0]);
        }
        productDataFormData.append('offer', data.offer);

        try {
            await toast.promise(api.put(`/products/${product.id}`, productDataFormData), {
                pending: 'Editando produto...',
                success: 'Produto editado com sucesso',
                error: 'Falha ao editar produto',
            });
            setTimeout(() => {
                navigate('/listar-produtos');
            }, 2000);
        } catch (error) {
            console.error("Erro ao editar o produto:", error);
        }
    };

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
        }
        loadCategories();
    }, []);

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <p className="p">Editar produto</p>

                <div>
                    <Label>Nome</Label>
                    <InputProduct type="text" {...register("name")} defaultValue={product.name} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <InputProduct type="number" {...register("price")} defaultValue={product.price} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>
                    <LabelUpload>
                        {fileName || (
                            <>
                                <DriveFolderUploadIcon />
                                Carregue a imagem do produto
                            </>
                        )}
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            {...register("file")}
                            onChange={value => {
                                setFileName(value.target.files[0]?.name);
                            }}
                        />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>
                    <Controller
                        name="category"
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => (
                            <ReactSelect
                                {...field}
                                options={categories}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={cat => cat.id}
                                placeholder="Categorias"
                            />
                        )}
                    />
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ContainerInput>
                    <input
                        type="checkbox"
                        defaultChecked={product.offer || false}
                        {...register("offer")}
                    />
                    <Label>Produto em oferta?</Label>
                </ContainerInput>

                <ButtonStyle>Editar Produto</ButtonStyle>
            </form>
        </Container>
    );
}

export default EditProduct;
