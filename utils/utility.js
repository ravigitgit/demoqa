// utils/utility.js

export async function handleAlertOnce(page, action = 'accept', text = '') {
  page.once('dialog', async dialog => {
    console.log('Dialog detected');
    console.log(`Message: ${dialog.message()}`);

    if (action === 'accept') {
      await dialog.accept(text);
    } else if (action === 'dismiss') {
      await dialog.dismiss();
    } else {
      throw new Error(`Invalid action: ${action}`);
    }
  });
}

export async function handleTimedAlert(page, triggerAction, action = 'accept', text = '') {
  const dialogPromise = page.waitForEvent('dialog');

  await triggerAction(); // click button

  const dialog = await dialogPromise;

  console.log(`Message: ${dialog.message()}`);

  if (action === 'accept') {
    await dialog.accept(text);
  } else if (action === 'dismiss') {
    await dialog.dismiss();
  } else {
    throw new Error(`Invalid action: ${action}`);
  }
}

export async function handlePromptAlert(page, text, action = 'accept') {
  page.once('dialog', async dialog => {
    console.log(`Dialog type: ${dialog.type()}`);
    console.log(`Message: ${dialog.message()}`);

    if (action === 'accept') {
      await dialog.accept(text);
    } else if (action === 'dismiss') {
      await dialog.dismiss();
    } else {
      throw new Error(`Invalid action: ${action}`);
    }
  });
}