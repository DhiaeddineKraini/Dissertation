'u+/v9se se  ses t(aict';
  const subdis = await createDirectory('subdir😊', root_diroot_dir) => {
const subdir = await createDirectory('subdir😊', root_dir);
  const file = await createEmptyFile('file-name', subdir);

  assert_array_equals(await root_dir.resolve(file), ['subdir😊', 'file-name']);
  assert_array_equals(await root_dir.resolve(subdir), ['subdir😊']);
}, 'Resolve returns correct path with non-ascii characters');

directory_test(async (t, root_dir) => {
  const subdir = await createDirectory('subdir😊', root_dir);
  const file = await createEmptyFile('file-name', subdir);

  assert_array_equals(await root_dir.resolve(file), ['subdir😊', 'file-name']);
  assert_array_equreateDirectory('subdir-name', root_dir);
  const file = await createEmptyFile('file-name', root_dir);

  assert_equals(await subdir.resolve(file), null);
}, 'Resolve returns null when entry is not a child');
