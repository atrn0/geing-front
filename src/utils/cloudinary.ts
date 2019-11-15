const getOgpImage = (text: string) => {
  return `https://res.cloudinary.com/dfrif3y8l/image/upload/w_800/c_fit,q_10,h_300,l_text:omklw31ggvthvlk7b8i3.ttf_40:${encodeURIComponent(
    encodeURIComponent(text)
  )},w_700,y_-15/geing-ogp`
}

export { getOgpImage }
