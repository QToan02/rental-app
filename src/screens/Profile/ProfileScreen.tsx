import * as React from 'react'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'
import { Container, Header, Content } from '../../components'
import { Images } from '../../theme'
import { profileList } from '../../assets/data'
import styles from './Styles/ProfileStyle'

export interface Props {
  navigation: any
}
function ProfileScreen({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.profileLinkList}
      onPress={() => navigation.navigate(item.pageName)}>
      <Text style={styles.profileLinkText}>{item.text}</Text>
      <Image
        source={item.image}
        resizeMode="contain"
        style={styles.profileLinkImg}
      />
    </TouchableOpacity>
  )
  return (
    <>
      <Container>
        <Header
          transparent
          hasBackBtn
          title="Profile"
          onBackPress={() => navigation.goBack()}
        />
        <Content hasHeader contentContainerStyle={styles.container}>
          <TouchableOpacity
            style={styles.profileEditContent}
            onPress={() => navigation.navigate('ProfileEdit')}>
            <View style={styles.profileImageContent}>
              <Image
                source={Images.UserImage}
                resizeMode="cover"
                style={styles.profileImage}
              />
            </View>
            <View style={styles.userNameEmailText}>
              <Text style={styles.userNameText}>Leesa Oberoy</Text>
              <Text style={styles.userEmailText}>leesaoberoi@gmail.com</Text>
            </View>
            <View style={styles.userEditIcon}>
              <Image
                source={Images.EditIcon}
                resizeMode="contain"
                style={styles.userEditImage}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.profileLinkListContent}>
            <FlatList
              data={profileList}
              renderItem={renderItem}
              bounces={false}
            />
          </View>
        </Content>
      </Container>
    </>
  )
}

export default ProfileScreen
