import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Container, InputProduct, Label, ButtonStyle, LabelUpload } from "./styles.js";
import { api } from "../../../services/api.js";
import { useForm, Controller } from "react-hook-form";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "../../../components/index.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])

    const navigate = useNavigate();

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Escolha uma categoria'),
        file: Yup.mixed().test('required', 'Carregue um arquivo', value => {
            return value?.length > 0
        }).test('fileSize', 'Carregue arquivos de ate 2mb', value => {
            return value[0]?.size < 2000000
        }).test('type', 'Carregue apenas arquivos png ou jpeg', value => {
            return value[0]?.type === 'image/png' || value[0]?.type === 'image/jpeg'
        })
    })

    const { register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = async data => {
        const productDataFormData = new FormData()
        productDataFormData.append('name', data.name);
        productDataFormData.append('price', data.price);
        productDataFormData.append('category_id', data.category.id);
        productDataFormData.append('file', data.file[0]);


        await toast.promise(api.post('products', productDataFormData), {
            pending: 'Criando novo produto...',
            success: 'Produto criado com sucesso',
            error: 'Falha ao criar produto',

        })
        setTimeout(() => {
            navigate('/listar-produtos');
        }, 2000);
    }

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data)
        }
        loadCategories();
    }, []);



    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <p className="p">Cadastrar produto</p>

                <div>
                    <Label>Nome</Label>
                    <InputProduct type="text" {...register("name")} />
                    <ErrorMessage >{errors.name?.message}</ErrorMessage>
                </div>
                <div>

                    <Label>Preço</Label>
                    <InputProduct type="number" {...register("price")} />
                    <ErrorMessage >{errors.price?.message}</ErrorMessage>
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
                                setFileName(value.target.files[0]?.name)
                            }}
                        />
                    </LabelUpload>
                    <ErrorMessage >{errors.file?.message}</ErrorMessage>
                </div>
                <div>

                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => {

                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder="Categorias"
                                />
                            )
                        }}
                    >

                    </Controller>
                    <ErrorMessage >{errors.category?.message}</ErrorMessage>
                </div>

                <ButtonStyle>Adicionar Produto</ButtonStyle>
            </form>
        </Container>
    )
}
export default NewProduct