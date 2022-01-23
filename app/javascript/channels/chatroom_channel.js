import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    // alert(`${data.username}: ${data.body}`)
    $('#msg-container').append(
      `<div class="card-text">
        <b>${data.username}:</b>&ensp; ${data.body}
      </div>`
    );
    scroll_bottom();
  }
});

function scroll_bottom() {
  if ($('#msg-container').length > 0) {
    $('#msg-container').scrollTop($('#msg-container')[0].scrollHeight);
  }
}