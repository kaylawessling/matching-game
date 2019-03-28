import React from 'react';
import Header from 'header';

<h1>Enjoy the game?</h1>

<h3>Share it on Facebook!</h3>

<div id="shareBtn" class="btn btn-success clearfix">Share</div>

<h3 style="margin-top: 50px">
  <hr />
  <a class="btn btn-small"  href="https://developers.facebook.com/docs/sharing/reference/share-dialog">Share Dialog Documentation</a>
</h3>

<script>
document.getElementById('shareBtn').onclick = function() {
  FB.ui({
    method: 'share',
    display: 'popup',
    href: 'https://developers.facebook.com/docs/',
  }, function(response){});
}
</script>
