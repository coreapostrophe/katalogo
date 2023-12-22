use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use models::Status;

mod models;

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().json(Status {
        data: "Yo".to_string(),
    })
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().route("/", web::get().to(manual_hello)))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}
