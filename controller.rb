require 'sinatra'

get '/' do
	send_file "index_html"
end	