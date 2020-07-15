/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  ActivityIndicator,
  LayoutAnimation, Text, ScrollView,
} from 'react-native'
import {connect} from "react-redux";

import {appTheme, darkPallet} from "../../constants/colors";
import * as actionCreators from '../../store/actions';
import {spacing} from "../../constants/dimension";
import fontSizes from "../../constants/fontSizes";
import fonts from "../../constants/fonts";
import Post from "../../components/Social/Post";
import strings from "../../constants/strings";

class PostViewer extends Component {
  componentDidMount() {
    const {updatePost, route} = this.props;
    const {postId} = route.params;
    updatePost(postId);
  }

  getPost = () => {
    const {route, postDetails} = this.props;
    if (!postDetails) return null;
    const {postId} = route.params;
    if (postDetails[postId])
      return postDetails[postId];
    else return null;
  }

  renderPost = (post) => {
    return (
      <View style={{marginTop: spacing.medium}}>
        <Post
          imageUrl={post.contentURL}
          likeCount={post.likes}
          commentCount={post.totalComments}
          createdOn={post.createdOn}
          text={post.textContent}
          likeCallback={() => {
          }}
          flagCallback={() => {
          }}
          shareCallback={() => {
          }}
        />
      </View>
    )
  }

  renderComment = (comment) => {
    return <Post
      likeCount={comment.likes}
      createdOn={comment.createdOn}
      text={comment.commentText}
      showComment={false}
    />
  }
  itemSeparator = () => <View style={{marginTop: spacing.medium}}/>

  renderComments = () => {
    const post = this.getPost();
    if (!post) return null;
    return (
      <>
        <Text style={styles.sectionTitle}>{strings.COMMENTS}</Text>
        <FlatList
          data={post.comments}
          renderItem={({item}) => this.renderComment(item)}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={this.itemSeparator}
          ListHeaderComponent={this.itemSeparator}
          ListFooterComponent={this.itemSeparator}
        />
      </>
    )
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const {route, postDetails} = this.props;
    const {postId} = route.params;
    if (nextProps.postDetails[postId] !== this.props.postDetails[postId])
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return true;
  }


  render() {
    const post = this.getPost();
    return (<>
        <StatusBar backgroundColor={appTheme.lightBackground}/>
        <View
          style={styles.container}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            {!post && <ActivityIndicator style={{position: 'absolute'}} color={appTheme.brightContent} size={50}/>}
            {post && this.renderPost(post)}
            {post && this.renderComments()}
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    backgroundColor: appTheme.background,
    flex: 1
  },
  titleContainer: {
    paddingTop: spacing.medium_sm,
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
    paddingBottom: spacing.medium_sm,
    backgroundColor: appTheme.darkBackground,
    alignItems: 'center',
  },
  sectionTitle: {
    color: 'white',
    fontSize: fontSizes.h1,
    fontFamily: fonts.CenturyGothic,
    marginTop: spacing.medium_sm,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: appTheme.background,
    width: '100%',
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    // paddingTop: spacing.large,
  },
  itemSeparatorHorizontal: {
    height: 1,
    marginTop: spacing.medium_lg,
    marginBottom: spacing.medium_lg,
    backgroundColor: appTheme.grey,
  },
  userContainer: {
    width: '100%'
  },
  postContainer: {
    borderRadius:10
  }
});

const mapStateToProps = (state) => ({
  postDetails: state.social.postDetails,
});

const mapDispatchToProps = (dispatch) => ({
  updatePost: (postId) => dispatch(actionCreators.updatePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostViewer);