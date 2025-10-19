import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdEmail, MdPerson, MdLock } from "react-icons/md";

// Componentes Aplicação
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, SubtitleLogin, Title,  Wrapper } from "../login/styles";
import { ColLg6, Row, DivErro, TextoTermo, TitleCreateAccount } from "./style";

// Services
import { api } from "../../services/api";

const CreateAccount = () => {
    const navigate = useNavigate();
    
    const { control, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            nome: '',
            email: '',
            senha: ''
        }
    });

    const onSubmit = async (formData) => {
        try {
            const { status } = await api.post(`/webhook/user/create`, formData);
            
            if(status === 200) {
                alert('OK');
                navigate('/login');
            }

        } catch(e) {
            alert(e);
        }
    };

    return (
        <>
            <Header/>

            <Container>
                <Row>
                    <ColLg6>
                        <Title>
                            A plataforma para você aprender com experts, dominar as principais tecnologias
                            e entrar mais rápido nas empresas mais desejadas.
                        </Title>
                    </ColLg6>

                    <ColLg6>
                        <TitleCreateAccount>Faça seu cadastro</TitleCreateAccount>

                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                type="text"
                                name="nome"
                                control={control}
                                rules={{ required: "Nome é obrigatório" }}
                                placeholder="Nome completo"
                                leftIcon={<MdPerson/>}
                            />

                            { errors.nome && <DivErro> Nome é obrigatório </DivErro> }

                            <Input
                                type="email"
                                name="email"
                                control={control}
                                rules={
                                    { 
                                        required: "E-mail é obrigatório", 
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Email inválido. Deve contem '@'",
                                        }
                                    }
                                }
                                placeholder="E-mail" 
                                leftIcon={<MdEmail/>} 
                            />

                            { errors.email?.type === 'required' && (
                                <DivErro> E-mail é obrigatório </DivErro>
                            )}

                            { errors.email?.type === 'pattern' && (
                                <DivErro> Email inválido. Deve contem '@' </DivErro> 
                            )}

                            <Input 
                                type="password"
                                name="senha"
                                control={control}
                                rules={
                                    { 
                                        required: "Senha é obrigatória",
                                        minLength: {
                                            value: 8,
                                            message: "A senha deve ter no mínimo 8 caracteres",
                                        } 
                                    }
                                }
                                placeholder="Senha"
                                leftIcon={<MdLock/>} 
                            />

                            { errors.senha?.type === 'required' && (
                                <DivErro> Senha é obrigatória </DivErro>
                            )}

                            { errors.senha?.type === 'minLength' && (
                                <DivErro> Senha deve ter no minímo 8 caracteres </DivErro>
                            )}

                            <Wrapper>
                                <Button
                                    title=" Criar minha conta" 
                                    variant="secondary" 
                                    type="submit"
                                />
                            </Wrapper>
                        </form>

                        <Wrapper>
                            <TextoTermo> 
                                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de 
                                Privacidade e os Termos de Uso da DIO.
                            </TextoTermo>

                            <div style={{fontFamily: 'Open Sans', fontSize: '14px', marginTop: '30px'}}> 
                                Já tenho conta. 
                                
                                <Link to="/login" style={{color: '#23DD7A', marginLeft: '10px'}}> 
                                    Fazer Login 
                                </Link> 
                            </div>
                        </Wrapper>
                        
                    </ColLg6>
                </Row>
            </Container>
        </>
    );
}

export { CreateAccount };