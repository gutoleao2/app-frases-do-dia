//Imports
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';

//Formatações
const Estilos = {

	principal:{
		backgroundColor: 'white',
		flex: 1 ,
		justifyContent: 'center',
		alignItems:'center'
	}, 
	botao: {
		backgroundColor: '#538530',
		paddingVertical: 10,
		paddingHorizontal: 40,
		marginTop: 20
	},
	textoBotao:{
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold'
	}
	
};

//Funões
const gerarNovaFrase = () => {
	var numeroAleatorio = Math.floor(Math.random() * 5);
	
	//Frases
	var frases = Array();
	frases[0] = 'Da vida eu só espero rir dos tombos, aprender com os erros, e continuar acreditando que no final tudo vai dar certo.';
	frases[1] = 'Quando você passar por momentos difíceis e se perguntar onde estará Deus, lembre-se que durante uma prova, o professor está em silêncio.';
	frases[2] = 'Talvez eu seja enganado inúmeras vezes... Mas não deixarei de acreditar que em algum lugar, alguém merece a minha confiança!';
	frases[3] = 'Falta de coragem causa perda de momentos incríveis. Arrisque sempre!';
	frases[4] = 'Ninguém faz cadeados sem chaves. Do mesmo modo, Deus não dá problemas sem soluções.';

	var fraseEscolhida = frases[numeroAleatorio];

	Alert.alert('',fraseEscolhida) ;
};

//Criar o componente
const App = () => {
	
	const { principal, botao, textoBotao } = Estilos;

	return(
		<View style={ principal } > 
			<Image source={ require('./imgs/logo.png')}/>
			<TouchableOpacity 
			style={botao}
			onPress={ gerarNovaFrase } >
				<Text style={textoBotao}> Nova Frase </Text>	
			</TouchableOpacity>			
		</View>		
	);
};
  
// Renderizar para o dispositivo
AppRegistry.registerComponent('app02', () => App);
  