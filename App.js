import 'react-native-gesture-handler';

import React, { useLayoutEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';



// NAVEGADORES

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const StackTecnologia = createNativeStackNavigator();
const StackEsportes = createNativeStackNavigator();


// NOTÍCIAS DE TECNOLOGIA

const noticiasTecnologia = [
  {
    id: '1',
    categoria: 'TECNOLOGIA',
    titulo: 'React Native lança nova versão',
    resumo: 'A nova versão traz melhorias de performance...',
    conteudo:
      'A nova versão do React Native foi lançada trazendo diversas melhorias de desempenho, estabilidade e novas ferramentas para desenvolvedores. A atualização promete facilitar a criação de aplicativos para Android e iOS.',
  },

  {
    id: '2',
    categoria: 'TECNOLOGIA',
    titulo: 'IA generativa bate recordes',
    resumo: 'Modelos de linguagem estão cada vez mais avançados...',
    conteudo:
      'A inteligência artificial generativa continua crescendo e alcançando novos recordes. Os modelos atuais conseguem produzir textos, imagens e códigos com cada vez mais qualidade e precisão.',
  },

  {
    id: '3',
    categoria: 'TECNOLOGIA',
    titulo: 'Expo SDK 52 é lançado',
    resumo:
      'Novas APIs, melhorias no Dev Client e correções de estabilidade...',
    conteudo:
      'O Expo SDK 52 chegou com novas APIs, melhorias no ambiente de desenvolvimento e diversas correções. A atualização também busca tornar o desenvolvimento com React Native mais rápido e simples.',
  },

  {
    id: '4',
    categoria: 'TECNOLOGIA',
    titulo: 'TypeScript 5.x melhora performance',
    resumo:
      'Atualizações no compilador reduzem tempos de build e melhoram suporte...',
    conteudo:
      'As versões mais recentes do TypeScript receberam melhorias importantes de desempenho. O compilador agora consegue processar grandes projetos com maior velocidade e eficiência.',
  },

  {
    id: '5',
    categoria: 'TECNOLOGIA',
    titulo: 'Hermes recebe otimizações',
    resumo:
      'Engine JavaScript do React Native ganha melhor gerenciamento de memória...',
    conteudo:
      'A engine Hermes recebeu novas otimizações para melhorar o gerenciamento de memória e aumentar a velocidade de execução dos aplicativos desenvolvidos com React Native.',
  },
];


// NOTÍCIAS DE ESPORTES

const noticiasEsportes = [
  {
    id: '1',
    categoria: 'ESPORTES',
    titulo: 'Final do campeonato é definida',
    resumo: 'Os times X e Y se enfrentarão na grande final...',
    conteudo:
      'Após semifinais eletrizantes, os times X e Y garantiram suas vagas e se enfrentarão na grande final do campeonato nacional no próximo domingo. A equipe X venceu de virada com um gol nos acréscimos, enquanto o time Y dominou seu adversário com uma vitória por 3 a 0. A expectativa é de um jogo histórico no estádio Maracanã.',
  },

  {
    id: '2',
    categoria: 'ESPORTES',
    titulo: 'Atleta quebra recorde mundial',
    resumo:
      'Na modalidade de corrida, um novo recorde foi estabelecido...',
    conteudo:
      'Um atleta conseguiu estabelecer um novo recorde mundial durante uma competição internacional. O resultado surpreendeu o público e marcou um momento histórico para o esporte.',
  },

  {
    id: '3',
    categoria: 'ESPORTES',
    titulo: 'Clássico termina empatado',
    resumo:
      'Em jogo equilibrado, equipes dividem pontos após viradas nos minutos finais...',
    conteudo:
      'O clássico terminou empatado após uma partida muito equilibrada. As duas equipes criaram boas oportunidades e protagonizaram um confronto emocionante até os minutos finais.',
  },

  {
    id: '4',
    categoria: 'ESPORTES',
    titulo: 'Seleção confirma amistosos',
    resumo:
      'Jogos de preparação visam dar ritmo a jovens promessas antes do torneio continental.',
    conteudo:
      'A seleção confirmou novos amistosos como preparação para as próximas competições. A comissão técnica pretende aproveitar as partidas para testar jovens jogadores.',
  },

  {
    id: '5',
    categoria: 'ESPORTES',
    titulo: 'Maratonista surpreende',
    resumo:
      'Atleta vence prova de rua e estabelece melhor marca pessoal em percurso desafiador.',
    conteudo:
      'Um maratonista surpreendeu ao vencer uma importante prova de rua. Além da vitória, o atleta conseguiu estabelecer a melhor marca pessoal de sua carreira.',
  },
];


// COMPONENTE REUTILIZÁVEL - CARD NOTÍCIA

function CardNoticia({ noticia, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.categoriaCard}>
        {noticia.categoria}
      </Text>

      <Text style={styles.tituloCard}>
        {noticia.titulo}
      </Text>

      <Text
        style={styles.resumoCard}
        numberOfLines={2}
      >
        {noticia.resumo}
      </Text>
    </TouchableOpacity>
  );
}


// TELA - TECNOLOGIA

function TecnologiaLista({ navigation }) {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['bottom']}
    >
      <Text style={styles.tituloCategoria}>
        Tecnologia
      </Text>

      <FlatList
        data={noticiasTecnologia}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <CardNoticia
            noticia={item}
            onPress={() =>
              navigation.navigate(
                'DetalhesTecnologia',
                {
                  noticia: item,
                }
              )
            }
          />
        )}
      />
    </SafeAreaView>
  );
}


// TELA - ESPORTES

function EsportesLista({ navigation }) {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['bottom']}
    >
      <Text style={styles.tituloCategoria}>
        Esportes
      </Text>

      <FlatList
        data={noticiasEsportes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <CardNoticia
            noticia={item}
            onPress={() =>
              navigation.navigate(
                'DetalhesEsportes',
                {
                  noticia: item,
                }
              )
            }
          />
        )}
      />
    </SafeAreaView>
  );
}


// TELA - DETALHES DA NOTÍCIA

function DetalhesNoticia({ route, navigation }) {

  const { noticia } = route.params;

  useLayoutEffect(() => {

    navigation.setOptions({
      title: noticia.titulo,
    });

  }, [navigation, noticia]);

  return (
    <SafeAreaView
      style={styles.containerDetalhes}
      edges={['bottom']}
    >
      <ScrollView
        contentContainerStyle={
          styles.conteudoDetalhes
        }
      >
        <Text style={styles.categoriaDetalhes}>
          {noticia.categoria}
        </Text>

        <Text style={styles.tituloDetalhes}>
          {noticia.titulo}
        </Text>

        <Text style={styles.textoDetalhes}>
          {noticia.conteudo}
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}


// STACK - TECNOLOGIA

function TecnologiaStack() {
  return (
    <StackTecnologia.Navigator>

      <StackTecnologia.Screen
        name="TecnologiaLista"
        component={TecnologiaLista}
        options={{
          headerShown: false,
        }}
      />

      <StackTecnologia.Screen
        name="DetalhesTecnologia"
        component={DetalhesNoticia}
        options={{
          title: 'Detalhes da Notícia',
          headerBackTitle: 'Voltar',
        }}
      />

    </StackTecnologia.Navigator>
  );
}


// STACK - ESPORTES

function EsportesStack() {
  return (
    <StackEsportes.Navigator>

      <StackEsportes.Screen
        name="EsportesLista"
        component={EsportesLista}
        options={{
          headerShown: false,
        }}
      />

      <StackEsportes.Screen
        name="DetalhesEsportes"
        component={DetalhesNoticia}
        options={{
          title: 'Detalhes da Notícia',
          headerBackTitle: 'Voltar',
        }}
      />

    </StackEsportes.Navigator>
  );
}


// TAB NAVIGATOR

function NoticiasTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#777',

        tabBarLabelStyle: {
          fontSize: 11,
        },

        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >

      <Tab.Screen
        name="Tecnologia"
        component={TecnologiaStack}
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="hardware-chip-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Esportes"
        component={EsportesStack}
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="trophy-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}


// TELA - SOBRE

function Sobre({ navigation }) {
  return (
    <SafeAreaView
      style={styles.sobreContainer}
      edges={['bottom']}
    >

      <ScrollView
        contentContainerStyle={
          styles.sobreConteudo
        }
      >

        <Text style={styles.sobreTitulo}>
          Sobre
        </Text>

        <Image
          source={{
            uri:
              'https://cdn-icons-png.flaticon.com/512/2965/2965879.png',
          }}
          style={styles.imagemSobre}
        />

        <View style={styles.linha} />

        <Text style={styles.textoSobre}>
          Esse é o Mini App de Notícias.
          {'\n'}
          Você irá praticar diferentes tipos de
          navegação com React Native:
          {'\n\n'}
          • Drawer (raiz)
          {'\n'}
          • Tabs (Tecnologia/Esportes)
          {'\n'}
          • Stacks (Lista → Detalhes)
        </Text>

      </ScrollView>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() =>
          navigation.navigate('Notícias')
        }
      >
        <Text style={styles.textoBotao}>
          VOLTAR
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}


// DRAWER PRINCIPAL


function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Notícias"

      screenOptions={{
        drawerActiveTintColor: '#2196F3',

        drawerActiveBackgroundColor:
          '#E3F2FD',

        headerTitleAlign: 'center',

        headerStyle: {
          backgroundColor: '#FFFFFF',
        },

        headerShadowVisible: true,
      }}
    >

      <Drawer.Screen
        name="Notícias"
        component={NoticiasTabs}

        options={{
          drawerIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="newspaper-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Sobre"
        component={Sobre}

        options={{
          drawerIcon: ({
            color,
            size,
          }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Drawer.Navigator>
  );
}


// APP PRINCIPAL

export default function App() {
  return (

    <SafeAreaProvider>

      <NavigationContainer>

        <DrawerNavigator />

      </NavigationContainer>

    </SafeAreaProvider>

  );
}


// ESTILOS

const styles = StyleSheet.create({

  // CONTAINER

  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },


  // TÍTULO DA CATEGORIA

  tituloCategoria: {
    fontSize: 20,
    fontWeight: 'bold',

    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 15,

    backgroundColor: '#FFFFFF',
  },


  lista: {
    padding: 15,
  },


  // CARD

  card: {
    backgroundColor: '#FFFFFF',

    padding: 16,

    borderRadius: 10,

    marginBottom: 10,

    borderWidth: 1,
    borderColor: '#E5E5E5',

    elevation: 2,

    shadowColor: '#000',

    shadowOpacity: 0.1,

    shadowRadius: 3,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },


  categoriaCard: {
    fontSize: 10,

    color: '#8B95A5',

    fontWeight: 'bold',

    marginBottom: 5,
  },


  tituloCard: {
    fontSize: 15,

    fontWeight: 'bold',

    color: '#222',

    marginBottom: 5,
  },


  resumoCard: {
    fontSize: 12,

    color: '#555',

    lineHeight: 17,
  },


  // DETALHES

  containerDetalhes: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },


  conteudoDetalhes: {
    padding: 18,
  },


  categoriaDetalhes: {
    fontSize: 11,

    color: '#8993A4',

    fontWeight: 'bold',

    marginBottom: 10,
  },


  tituloDetalhes: {
    fontSize: 22,

    fontWeight: 'bold',

    color: '#222',

    marginBottom: 20,
  },


  textoDetalhes: {
    fontSize: 16,

    color: '#444',

    lineHeight: 24,

    textAlign: 'justify',
  },


  // SOBRE

  sobreContainer: {
    flex: 1,

    backgroundColor: '#F8F8F8',

    padding: 20,
  },


  sobreConteudo: {
    alignItems: 'center',
  },


  sobreTitulo: {
    fontSize: 22,

    fontWeight: 'bold',

    marginTop: 15,

    marginBottom: 10,
  },


  imagemSobre: {
    width: 100,

    height: 100,

    resizeMode: 'contain',

    marginBottom: 20,
  },


  linha: {
    width: '100%',

    height: 1,

    backgroundColor: '#888',

    marginBottom: 20,
  },


  textoSobre: {
    width: '100%',

    fontSize: 15,

    lineHeight: 23,

    color: '#444',
  },


  // BOTÃO VOLTAR

  botaoVoltar: {
    backgroundColor: '#2196F3',

    paddingVertical: 13,

    alignItems: 'center',

    marginBottom: 5,
  },


  textoBotao: {
    color: '#FFFFFF',

    fontWeight: 'bold',

    fontSize: 13,
  },

});