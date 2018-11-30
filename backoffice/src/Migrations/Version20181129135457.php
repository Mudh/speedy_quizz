<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181129135457 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE joker (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(150) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE joker_quantity (id INT AUTO_INCREMENT NOT NULL, username_id INT NOT NULL, joker_id INT NOT NULL, quantity INT NOT NULL, INDEX IDX_7B17C33FED766068 (username_id), INDEX IDX_7B17C33F32202C87 (joker_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE joker_quantity ADD CONSTRAINT FK_7B17C33FED766068 FOREIGN KEY (username_id) REFERENCES app_users (id)');
        $this->addSql('ALTER TABLE joker_quantity ADD CONSTRAINT FK_7B17C33F32202C87 FOREIGN KEY (joker_id) REFERENCES joker (id)');
        $this->addSql('ALTER TABLE app_users DROP joker_skip, DROP joker_5050, DROP joker_revive, DROP joker_timer');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE joker_quantity DROP FOREIGN KEY FK_7B17C33F32202C87');
        $this->addSql('DROP TABLE joker');
        $this->addSql('DROP TABLE joker_quantity');
        $this->addSql('ALTER TABLE app_users ADD joker_skip INT NOT NULL, ADD joker_5050 INT NOT NULL, ADD joker_revive INT NOT NULL, ADD joker_timer INT NOT NULL');
    }
}
