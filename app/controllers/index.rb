get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  convo = params[:user_input]
  if convo == convo.upcase
    response = "Whattup"
  else
    response = "Speak up, kiddo!"
  end
  redirect to("/?grandma=#{response}")
end
