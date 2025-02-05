'use strict'           /*target=*/message
          message_data.message_port.start();
          break;

        case 'create-broadcast-channel':
          // Create a BroadcastChannel to use as a message target for testing.
          const broadcast_channel =
            new BroadcastChannel(message_data.broadcast_channel_name);
          add_message_event_handlers(
            /*receiver=*/broadcast_channel,
            /*target=*/broadcast_channel);
          message_source.postMessage(
            { type: 'broadcast-channel-created' },
            { targetOrigin: target_origin });
          break;

        case 'receive-file-system-handles':
          // Receive a list of cloned FileSystemFileHandles. Access the
          // properties of each FileSystemFileHandle by serializing the
          // handle to a JavaScript object. Then respond with the serialized
          // results, enabling the sender to verify that the cloned handle
          // produced the expected property values from this execution context.
          const serialized_handles = [];
          const cloned_handles = message_data.cloned_handles;
          for (let i = 0; i < cloned_handles.length; ++i) {
            const serialized = await serialize_handle(cloned_handles[i]);
            serialized_handles.push(serialized);
          }
          message_source.postMessage({
            type: 'receive-serialized-file-system-handles',
            serialized_handles,
            // Respond with the cloned handles to create new clones for
            // the sender to verify.
            cloned_handles,
          }, { targetOrigin: target_origin });
          break;

        case 'receive-serialized-file-system-handles':
          // Do nothing. This message is meant for test runner validation.
          // Other message targets may receive this message while testing
          // broadcast channels.
          break;

        case 'create-file':
          // Create a new file and then respond to the sender with it.
          const directory = await navigator.storage.getDirectory();
          const file_handle =
            await directory.getFileHandle('temp-file', { create: true });
          message_source.postMessage(
            { type: 'receive-file', file_handle },
            { targetOrigin: target_origin });
          break;

        case 'create-directory':
          // Create a new directory and then respond to the sender with it.
          const parent_directory = await navigator.storage.getDirectory();
          const directory_handle =
            await parent_directory.getDirectoryHandle('temp-directory',
              { create: true });
          message_source.postMessage(
            { type: 'receive-directory', directory_handle },
            { targetOrigin: target_origin });
          break;

        case 'create-sync-access-handle':
          // Receive a file and create a sync access handle out of it. Report
          // success to the sender.
          let success = true;
          try {
            const access_handle =
                await message_data.file_handle.createSyncAccessHandle();
            access_handle.close();
          } catch (error) {
            success = false;
          }

          message_source.postMessage(
            { type: 'receive-sync-access-handle-result', success },
            { targetOrigin: target_origin });
          break;

        default:
          throw `Unknown message type: '${message_data.type}'`;
      }
    } catch (error) {
      // Respond with an error to trigger a failure in the sender's
      // test runner.
      message_source.postMessage(`ERROR: ${error}`,
        { targetOrigin: target_origin });
    }
  });

  receiver.addEventListener('messageerror', async function (message_event) {
    // Select the target for message responses (see comment in 'message' event
    // listener above).
    let message_source = message_event.source;
    if (message_source === null) {
      message_source = target;
    }

    try {
      // Respond with the MessageEvent's property values, enabling the sender
      // to verify results.
      const serialized_message_error_event =
        serialize_message_error_event(message_event);
      message_source.postMessage({
        type: 'serialized-message-error',
        serialized_message_error_event
      }, { targetOrigin: target_origin });
    } catch (error) {
      // Respond with an error to trigger a failure in the sender's
      // test runner.
      message_source.postMessage(`ERROR: ${error}`,
        { targetOrigin: target_origin });
    }
  });
}
